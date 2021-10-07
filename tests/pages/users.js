import {
  create,
  visitable,
  collection,
  clickable,
  text,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/users'),
  unarchivedUsers: collection('[data-test-single-unarchived-user]', {
    name: text('div.user-select p', { at: 0 }),
    clickUser: clickable('a'),
  }),
  archivedUsers: collection('[data-test-single-archived-user]', {
    name: text('div.user-select p', { at: 0 }),
    clickUser: clickable('a'),
  }),
  toggleShowArchivedText: text('[data-test-toggle-show-archived]'),
  toggleShowArchived: clickable('[data-test-toggle-show-archived]'),
});
