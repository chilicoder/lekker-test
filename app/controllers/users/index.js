import Controller from '@ember/controller';

export default class UsersIndexController extends Controller {
  get unarchivedUsers() {
    const users = this.model;
    return users.filter((user) => !user.archived);
  }
  get archivedUsers() {
    const users = this.model;
    return users.filter((user) => user.archived);
  }
}
