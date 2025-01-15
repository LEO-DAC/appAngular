import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  template: `<h1>hola {{ title }} !!<h2>
              <button (click)="setStatus()" >iniciar sesion</button>
              
              <app-user>

              `
              ,
  styles: `h1{
      color: gray;
      font-family: verdana;
      font-size: 20px;
  }
  button {
    color : white
    font-size: 16
    background-color:rgb(41, 123, 151)
  }
  `
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

  title = 'appAngular';
  mostrar= true;
}
