import { Component, input } from '@angular/core';
import { Usuario } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<Usuario>();
}
