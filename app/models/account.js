import Model, { attr } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string') account_number;
  @attr('number') transaction_amount;
  @attr('number') updated_balance;
}