import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import UsersPage from '../pages/users';
import UserPage from '../pages/user';

module('Acceptance | users', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /users', async function (assert) {
    await UsersPage.visit();
    assert.equal(currentURL(), '/users');
    assert.equal(UsersPage.unarchivedUsers.length, 4);
    assert.equal(UsersPage.unarchivedUsers[0].name, 'Albert Einstein');
  });

  test('archiving user', async function (assert) {
    await UsersPage.visit();
    assert.equal(currentURL(), '/users');
    assert.equal(UsersPage.unarchivedUsers.length, 4);
    assert.equal(UsersPage.archivedUsers.length, 0);

    // go to the first user page and toggling archive
    await UsersPage.unarchivedUsers[0].clickUser();
    await UserPage.toggleArchive();

    // go back to users page
    await UserPage.backToUsers();
    assert.equal(UsersPage.unarchivedUsers.length, 3);
    assert.equal(UsersPage.archivedUsers.length, 0);
    assert.equal(UsersPage.toggleShowArchivedText,'Show archived users');

    // show archived users
    await UsersPage.toggleShowArchived();
    assert.equal(UsersPage.archivedUsers.length, 1);
    assert.equal(UsersPage.toggleShowArchivedText,'Hide archived users');
  });

});
