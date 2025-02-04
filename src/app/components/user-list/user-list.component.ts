import { Component, input } from '@angular/core';
import { UserComponent } from "../../user/user.component";
import { Usuario } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 usuarios = input.required<Usuario[]>();
}
