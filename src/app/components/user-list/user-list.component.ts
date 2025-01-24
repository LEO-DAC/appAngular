import { Component } from '@angular/core';
import { UserComponent } from "../../user/user.component";
import { Usuario } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  public usuarios: Usuario[] = [
    {
      nombre: "Leonardo",
      apellido: "Alonso",
      img: "/LEONARDO.jpg",
      edad: 28,
      peso: 82,
      hipertenso: false,
      id: 1
     },
     {
      nombre: "Maria Luisa",
      apellido: "Cepeda",
      img: "/favicon.ico",
      edad: 49,
      peso: 85,
      hipertenso: true,
      id: 1
     },
     {
      nombre: "juan Perez",
      apellido: "Doe",
      img: "/favicon.ico",
      edad: 49,
      peso: 90,
      hipertenso: true,
      id: 1
     }
  ] 

}
