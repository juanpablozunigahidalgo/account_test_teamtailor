import Component from '@ember/component';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default Component.extend({
  store: service(),
  accountNumber: null,
  transactionAmount: null,
  message: '',

  init() {
    this._super(...arguments);

    // Bind functions to the component instance
    this.submitTransaction = this.submitTransaction.bind(this);
    this.fetchAccountsFromJsonBin = this.fetchAccountsFromJsonBin.bind(this);
    this.postDataToJsonBin = this.postDataToJsonBin.bind(this);
  },



  submitTransaction: async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const accountNumber = this.get('accountNumber');
    const transactionAmount = this.get('transactionAmount');

    // Fetch accounts from jsonbin.io
    const accounts = await this.fetchAccountsFromJsonBin('654ce74612a5d3765997106e');
    console.log(accounts);

    // Validate account existence
    const account = accounts.find((acc) => acc.account_number === accountNumber);

    if (!account) {
      this.set('message', 'Account not found');
      console.log('Account not found');
      console.log(accountNumber);
      console.log(transactionAmount);
      return;
    }

    // Update transactions on jsonbin.io
    const transaction = {
      transaction_id: `t${Date.now()}`,
      date_time: new Date().toISOString(),
      account_number: accountNumber,
      transaction_amount: parseFloat(transactionAmount),
      updated_balance: account.updated_balance - parseFloat(transactionAmount),
    };

    await this.postDataToJsonBin(transaction, '654ce85612a5d376599710d9');

    // Update account balance on jsonbin.io
    const updatedAccount = {
      transaction_amount: parseFloat(transactionAmount),
      updated_balance: transaction.updated_balance,
    };

    await this.postDataToJsonBin(updatedAccount, '654ce74612a5d3765997106e');

    // Show success message
    this.set('message', 'Transaction made');

    // Clear form
    this.set('accountNumber', null);
    this.set('transactionAmount', null);

    // Clear message after 2 seconds
    setTimeout(() => {
      this.set('message', '');
    }, 2000);
  },

  fetchAccountsFromJsonBin: async function (binId) {
    const apiKey = '$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG';
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}/latest`;
  
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
  
      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            try {
              const response = JSON.parse(req.responseText);
              const data = response.record || {}; // Assuming the actual data is nested under "record"
              resolve(data.accounts || []);
            } catch (error) {
              console.error('Error parsing JSON:', error);
              reject([]);
            }
          } else {
            console.error('Error fetching accounts from jsonbin.io:', req.statusText);
            reject([]);
          }
        }
      };
  
      req.open('GET', apiUrl, true);
      req.setRequestHeader('X-Master-Key', apiKey);
      req.send();
    });
  },


  // fetchAccountsFromJsonBin: async function (binId) {
  //   const apiKey = '$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG';
  //   const apiUrl = `https://api.jsonbin.io/v3/b/${binId}/latest`;

  //   try {
  //     const response = await fetch(apiUrl, {
  //       headers: {
  //         'X-Master-Key': apiKey,
  //       },
  //     });

  //     const data = await response.json();

  //     return data.accounts || [];
  //   } catch (error) {
  //     console.error('Error fetching accounts from jsonbin.io:', error);
  //     return [];
  //   }
  // },

  postDataToJsonBin: async function (data, binId) {
    const apiKey = '$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG';
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

    try {
      await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': apiKey,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error posting data to jsonbin.io:', error);
    }
  },
});
