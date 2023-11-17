'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-auto-import': {
      skipBabel: true,
    },
    // ... other configurations ...
  });

  return app.toTree();
};
