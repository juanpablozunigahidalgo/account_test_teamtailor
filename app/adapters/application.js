// app/adapters/application.js

import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://api.jsonbin.io/v3';
  namespace = 'b';
}
