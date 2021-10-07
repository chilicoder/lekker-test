import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersIndexController extends Controller {
  @tracked showArchivedUsers = false;

  @action
  toggleShowArchived() {
    this.showArchivedUsers = !this.showArchivedUsers;
  }

  get unarchivedUsers() {
    const users = this.model;
    return users.filter((user) => !user.archived);
  }
  get archivedUsers() {
    const users = this.model;
    return users.filter((user) => user.archived);
  }
}
