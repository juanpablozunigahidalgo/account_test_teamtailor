import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = '/api'; // Assumes the JSON files are in the public/api folder

  // Override the buildURL method to handle custom URLs for each model
  buildURL(modelName, id, snapshot, requestType, query) {
    let url = super.buildURL(...arguments);

    if (modelName === 'account') {
      url = `${url}/accountbalance.json`;
    } else if (modelName === 'transaction') {
      url = `${url}/transactions.json`;
    }

    return url;
  }
}