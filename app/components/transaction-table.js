
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TransactionTableComponent extends Component {
  @tracked transactions = [];

  constructor() {
    super(...arguments);
    this.fetchTransactions();
  }

  fetchTransactions() {
    const apiKey = '$2b$10$xFC7BlC/9mfhK2jwRMo.IemTR8HRFha0TZyWFgA8n./iRCF2kjqpG';
    const binId = '654ce85612a5d376599710d9'; // Your JSONBIN ID
    const binVersion = 'latest'; // You can change this to a specific version if needed
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}/${binVersion}`;

    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) {
            try {
              const response = JSON.parse(req.responseText);
              const data = response.record || {}; // Assuming the actual data is nested under "record"
              this.transactions = data.transactions.slice(-3).reverse();
              resolve(this.transactions);
            } catch (error) {
              console.error('Error parsing JSON:', error);
              reject([]);
            }
          } else {
            console.error(
              'Error fetching transactions from jsonbin.io:',
              req.statusText,
            );
            reject([]);
          }
        }
      };

      req.open('GET', apiUrl, true);
      req.setRequestHeader('X-Master-Key', apiKey);
      req.send();
    });
  }
}