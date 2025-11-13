import { Component } from '@angular/core';
import { USER } from '../types';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './user/dummy-users';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    User,
    Tasks
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // properties
  users: USER[] = DUMMY_USERS;
  selectedUserId: string = 'u1';

  // this function is called when the output signal is changed from the click event on the user component
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
  // get the selected user object and returns undefined if one is not found
  get getSelectedUser(): USER | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
