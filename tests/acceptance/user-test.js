import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /user', async function(assert) {
    await visit('/users/1');

    assert.equal(currentURL(), '/users/1');
  });
});
