import { Component, input, output } from '@angular/core';
import { Usuario } from '../shared/interfaces/user.interface';
import { userChange } from '../shared/interfaces/user-change.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<Usuario>();
  userChange = output<userChange>();
}
