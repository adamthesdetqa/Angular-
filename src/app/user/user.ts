import { Component, computed, input, output } from '@angular/core';
import { USER } from '../../types';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  user = input.required<USER>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  selectedUserId = output<string>();

  onClickUser() {
    this.selectedUserId.emit(this.user().id);
  }
}
