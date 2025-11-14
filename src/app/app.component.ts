import { Component, computed, signal } from '@angular/core';
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
/**
 * Root component of the application that manages user selection and task display
 */
export class AppComponent {
  users: USER[] = DUMMY_USERS; /** Array of all available users */
  selectedUserId = signal<string>('u1'); /** ID of the currently selected user */

  selectedUser = computed(() => this.users.find((user) => user.id === this.selectedUserId()));
  /**
   * Handles user selection event and updates the currently selected user ID
   * @param id - The ID of the selected user
   */
  onSelectedUser(id: string) {
    this.selectedUserId.set(id);
  }
}
