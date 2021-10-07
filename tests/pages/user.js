import {
  create,
  visitable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/users/:user_id'),
  toggleArchive: clickable('[data-test-toggle-archive-button]'),
  backToUsers: clickable('[data-test-back-to-users]'),
});
