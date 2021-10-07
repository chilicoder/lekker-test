import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UserArchiveComponent extends Component {
  @action
  toggleArchived() {
    const user = this.args.user;
    user.toggleArchived();
    user.save();
  }
}
