import { Component,signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    User
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // users = signal(DUMMY_USERS);
  users= DUMMY_USERS
}
