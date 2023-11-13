import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TransactionFormComponent extends Component {
  @tracked accountNumber = '';
  @tracked amountTransaction = '';

  @service store;

  @action
  async handleSubmit() {
    // Create a new transaction record
    const newTransaction = this.store.createRecord('transaction', {
      accountNumber: this.accountNumber,
      amountTransaction: parseFloat(this.amountTransaction),
    });

    // Save the record to the backend
    await newTransaction.save();

    // Log the entered values to the console
    console.log('Account Number:', this.accountNumber);
    console.log('Amount Transaction:', this.amountTransaction);

    // Clear the input fields
    this.accountNumber = '';
    this.amountTransaction = '';

    // Display a message in the console
    console.log('Transaction made');
  }
}