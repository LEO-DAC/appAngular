import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';


@Component({
  selector: 'app-root',
  imports: [UserListComponent, ],
  template: `
            
            <app-user-list/>
         

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
