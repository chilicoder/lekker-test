import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | user-archive', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {

    // Overall I would prefer to use sinon for this functionality buy adding it for one particular
    // test seems to be an overkill.
    this.userStub = EmberObject.create({
      archived: true,
      toggleArchive: false,
      saved: false,
      toggleArchived() {
        this.toggleArchive = true;
      },
      save() {
        this.saved = true;
      }
    });;
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UserArchive />`);

    assert.equal(this.element.textContent.trim(), 'Archive');
  });

  test('it shows archived user properly', async function (assert) {
    this.set('user', this.userStub);
    await render(hbs`<UserArchive @user={{this.user}}/>`);
    assert.equal(this.element.querySelector('[data-test-p-archived]').textContent.trim(), 'The user is currently archived.');
    assert.equal(this.element.querySelector('[data-test-toggle-archive-button]').textContent.trim(), 'Unarchive');
  });

  test('it calls models methods when toggle', async function (assert) {
    this.set('user', this.userStub);
    await render(hbs`<UserArchive @user={{this.user}}/>`);
    await click('[data-test-toggle-archive-button]');
    assert.equal(this.userStub.toggleArchive, true);
    assert.equal(this.userStub.saved, true);
  });

});
