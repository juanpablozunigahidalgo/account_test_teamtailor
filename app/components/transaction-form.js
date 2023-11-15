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
    event.preventDefault();
  
    const accountNumber = this.get('accountNumber');
    const transactionAmount = parseFloat(this.get('transactionAmount'));
  
    // Fetch accounts from jsonbin.io
    const accounts = await this.fetchAccountsFromJsonBin('654ce74612a5d3765997106e');
  
    // Validate account existence
    let account = accounts.find((acc) => acc.account_number === accountNumber);
  
    if (!account) {
      // If account not found, create a new account
      this.set('message', 'Account not found');
      console.log('Account not found');
      console.log(accountNumber);
      console.log(transactionAmount);
      account = {
        account_number: accountNumber,
        transaction_history: [], // Initialize transaction history for new accounts
        running_balance: transactionAmount, // Initialize running_balance for new accounts
        latest_transaction_amount: transactionAmount, // Initialize latest_transaction_amount for new accounts
      };
  
      // Add the very first transaction to the transaction history
      const firstTransaction = {
        transaction_id: `t${Date.now()}`,
        date_time: new Date().toISOString(),
        account_number: accountNumber,
        transaction_amount: transactionAmount,
        updated_balance: transactionAmount,
      };
  
      // Add the new account to the accounts array
      account.transaction_history.push(firstTransaction);
      accounts.push(account);
    } else {
      // Update transactions on jsonbin.io for existing accounts
      const transaction = {
        transaction_id: `t${Date.now()}`,
        date_time: new Date().toISOString(),
        account_number: accountNumber,
        transaction_amount: transactionAmount,
        updated_balance: account.running_balance + transactionAmount,
      };
  
      // Update the running balance for the account
      account.running_balance += transactionAmount;
  
      // Update the latest_transaction_amount for the account
      account.latest_transaction_amount = transactionAmount;
  
      // Add the transaction to the transaction history
      account.transaction_history.push(transaction);
    }
  
    // Update accounts on jsonbin.io
    await this.postDataToJsonBin({ accounts }, '654ce74612a5d3765997106e');
  
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

