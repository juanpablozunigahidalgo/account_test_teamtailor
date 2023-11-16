import { module, test } from 'qunit';
import { setupRenderingTest } from 'account-test/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | transaction-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TransactionTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TransactionTable>
        template block text
      </TransactionTable>
    `);

    assert.dom().hasText('template block text');
  });
});
