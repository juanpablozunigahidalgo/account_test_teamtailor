import Model, { attr } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('string') transaction_id;
  @attr('string') date_time;
  @attr('string') account_number;
  @attr('number') transaction_amount;
  @attr('number') updated_balance;
}