'use strict';

define("account-test/tests/acceptance/super-rentals-test", ["qunit", "@ember/test-helpers", "super-rentals/tests/helpers"], function (_qunit, _testHelpers, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"super-rentals/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Acceptance | super rentals', function (hooks) {
    (0, _helpers.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
      assert.dom('h2').hasText('Welcome to Super Rentals!');
      assert.dom('.jumbo a.button').hasText('About Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
    });
    (0, _qunit.test)('visiting /about', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
      assert.dom('h2').hasText('About Super Rentals');
      assert.dom('.jumbo a.button').hasText('Contact Us');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/getting-in-touch');
    });
    (0, _qunit.test)('visiting /getting-in-touch', async function (assert) {
      await (0, _testHelpers.visit)('/getting-in-touch');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/getting-in-touch');
      assert.dom('h2').hasText('Contact Us');
      assert.dom('.jumbo a.button').hasText('About');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/about');
    });
  });
});
define("account-test/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("account-test/tests/integration/components/table-data-test", ["qunit", "account-test/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"account-test/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | table-data', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TableData />
      */
      {
        "id": "MM/EWQDE",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"table-data\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\table-data-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TableData>
              template block text
            </TableData>
          
      */
      {
        "id": "IaXzovkR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"table-data\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\table-data-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("account-test/tests/integration/components/table-data/image-test", ["qunit", "account-test/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"account-test/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | table-data/image', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TableData::Image />
      */
      {
        "id": "iG5ZKY7r",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"table-data/image\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\table-data\\image-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TableData::Image>
              template block text
            </TableData::Image>
          
      */
      {
        "id": "OcH8W26l",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"table-data/image\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\table-data\\image-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("account-test/tests/integration/components/transaction-table-test", ["qunit", "account-test/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"account-test/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | transaction-table', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <TransactionTable />
      */
      {
        "id": "PaSPMWDy",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"transaction-table\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\transaction-table-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <TransactionTable>
              template block text
            </TransactionTable>
          
      */
      {
        "id": "E3qDRAXu",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"transaction-table\"]]",
        "moduleName": "C:\\Users\\pablo\\Documents\\Vida 2023\\Work\\Code Test\\account_test\\account-test\\tests\\integration\\components\\transaction-table-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("account-test/tests/test-helper", ["account-test/app", "account-test/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"account-test/app",0,"account-test/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('account-test/config/environment', [], function() {
  var prefix = 'account-test';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('account-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
