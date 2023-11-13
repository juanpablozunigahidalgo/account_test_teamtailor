import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  accountNumber: null,
  transactionAmount: null,
  message: '',

  actions: {
    async submitForm() {
      const accountNumber = this.get('accountNumber');
      const transactionAmount = this.get('transactionAmount');

      // Validate account existence
      const account = await this.store.findRecord('account', accountNumber).catch(() => null);

      if (!account) {
        this.set('message', 'Account not found');
        return;
      }

      // Update transaction.json
      const transaction = {
        transaction_id: `t${Date.now()}`,
        date_time: new Date().toISOString(),
        account_number: accountNumber,
        transaction_amount: parseFloat(transactionAmount),
        updated_balance: account.get('updated_balance') - parseFloat(transactionAmount)
      };

      const transactions = await this.store.findAll('transaction');
      transactions.pushObject(transaction);
      await transaction.save();

      // Update accountbalance.json
      account.set('transaction_amount', parseFloat(transactionAmount));
      account.set('updated_balance', transaction.updated_balance);
      await account.save();

      // Show success message
      this.set('message', 'Transaction made');

      // Clear form
      this.set('accountNumber', null);
      this.set('transactionAmount', null);

      // Clear message after 2 seconds
      setTimeout(() => {
        this.set('message', '');
      }, 2000);
    }
  }
});