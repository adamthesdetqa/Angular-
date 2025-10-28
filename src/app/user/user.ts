import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  name = input<string>();
  avatar = input<string>();
  imagePath = computed(() => `assets/users/${this.avatar()}`);
  onSelectUser() {
    console.info('On seleceted user clicked');
  }
}
