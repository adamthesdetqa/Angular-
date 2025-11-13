import { Component, input } from '@angular/core';
import { USER } from '../../types';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  curSelectedUser = input<USER | undefined>();
}
