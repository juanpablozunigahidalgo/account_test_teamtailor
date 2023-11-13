import Model, { attr } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('string') accountNumber;
  @attr('number') amountTransaction;
}