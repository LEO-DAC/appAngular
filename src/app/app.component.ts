import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { Usuario } from './shared/interfaces/user.interface';

@Component({
  selector: 'app-root',
  imports: [UserListComponent,UserNewComponent],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'

})
export class AppComponent {
  setStatus(): void {
   this.mostrar = !this.mostrar
   
   if(this.mostrar){
      alert("el estado de mostrar es true")
   }else{
      alert("el estado de mostrar es false")
   }

 }
 verFormularioRegistro(verFormularioRegistro:boolean){
    this.FlagFormularioRegistro=verFormularioRegistro;
 }  

 FlagFormularioRegistro = false;
  title = 'appAngular';
  mostrar= true;

  public usuarios: Usuario[] = [
    {
      nombre: "Leonardo",
      apellido: "Alonso",
      img: "/LEONARDO.jpg",
      edad: 28,
      sexo: "M",
      peso: 80,
      altura: 1.75,
      hipertenso: false,
      id: 1
     },
     {
      nombre: "Maria Luisa",
      apellido: "Cepeda",
      img: "/favicon.ico",
      edad: 49,
      sexo: "F",
      altura: 1.50,
      peso: 85,
      hipertenso: true,
      id: 1
     },
     {
      nombre: "juan Perez",
      apellido: "Doe",
      img: "/favicon.ico",
      edad: 49,
      sexo: "M",
      altura: 1.70,
      peso: 90,
      hipertenso: true,
      id: 1
     }
  ] 

  newUser(usuario: Usuario) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }
  
}
