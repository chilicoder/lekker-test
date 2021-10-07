import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import UserPage from '../pages/user';

module('Acceptance | user', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /user', async function (assert) {
    await UserPage.visit({ user_id: 1 });

    assert.equal(currentURL(), '/users/1');
  });
});
