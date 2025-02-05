import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { Usuario } from './shared/interfaces/user.interface';
import { BitacoraPresion } from './shared/interfaces/bitacoraPresion.interface';

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
  
  public bitacoraPresion:BitacoraPresion[] = [
    { fecha: "14 de noviembre", hora: "8am", presion: "130/82" },
    { fecha: "14 de noviembre", hora: "6pm", presion: "143/72" },
    { fecha: "15 de noviembre", hora: "7am", presion: "128/72" },
    { fecha: "15 de noviembre", hora: "6pm", presion: "161/68" },
    { fecha: "15 de noviembre", hora: "10pm después de correr", presion: "121/75" },
    { fecha: "16 de noviembre", hora: "6am", presion: "121/75" },
    { fecha: "16 de noviembre", hora: "8pm", presion: "112/67" },
    { fecha: "17 de noviembre", hora: "8am", presion: "128/72" },
    { fecha: "17 de noviembre", hora: "8pm", presion: "142/70" },
    { fecha: "18 de noviembre", hora: "8am", presion: "137/75" },
    { fecha: "19 de noviembre", hora: "8am", presion: "127/74" },
    { fecha: "19 de noviembre", hora: "6pm", presion: "138/81" },
    { fecha: "20 de noviembre", hora: "8am", presion: "115/75" },
    { fecha: "20 de noviembre", hora: "6pm", presion: "136/81" },
    { fecha: "21 de noviembre", hora: "8am", presion: "127/84" },
    { fecha: "21 de noviembre", hora: "6pm", presion: "143/81" },
    { fecha: "22 de noviembre", hora: "6am", presion: "129/73" },
    { fecha: "22 de noviembre", hora: "8am", presion: "135/82" },
    { fecha: "22 de noviembre", hora: "6pm", presion: "136/77" },
    { fecha: "23 de noviembre", hora: "8am", presion: "116/75" },
    { fecha: "23 de noviembre", hora: "6pm", presion: "134/78" },
    { fecha: "24 de noviembre", hora: "8am", presion: "130/74" },
    { fecha: "24 de noviembre", hora: "6pm", presion: "130/80" },
    { fecha: "25 de noviembre", hora: "8am", presion: "118/83" },
    { fecha: "25 de noviembre", hora: "6pm", presion: "137/80" },
    { fecha: "26 de noviembre", hora: "8am", presion: "132/80" },
    { fecha: "26 de noviembre", hora: "6pm", presion: "147/84" },
    { fecha: "27 de noviembre", hora: "8am", presion: "136/80" },
    { fecha: "27 de noviembre", hora: "6pm", presion: "138/83" },
    { fecha: "28 de noviembre", hora: "8am", presion: "130/74" },
    { fecha: "28 de noviembre", hora: "6pm", presion: "129/80" },
    { fecha: "29 de noviembre", hora: "8am", presion: "122/83" },
    { fecha: "29 de noviembre", hora: "6pm", presion: "150/85" },
    { fecha: "30 de noviembre", hora: "8am", presion: "139/80" },
    { fecha: "30 de noviembre", hora: "6pm", presion: "145/88" },
    { fecha: "1 de diciembre", hora: "8am", presion: "150/84" },
    { fecha: "1 de diciembre", hora: "6pm", presion: "141/95" },
    { fecha: "2 de diciembre", hora: "6am", presion: "132/87" },
    { fecha: "2 de diciembre", hora: "8am después de correr", presion: "119/83" },
    { fecha: "2 de diciembre", hora: "6pm", presion: "135/89" },
    { fecha: "3 de diciembre", hora: "8am después de entrenar", presion: "116/80" },
    { fecha: "3 de diciembre", hora: "6pm", presion: "121/85" },
    { fecha: "4 de diciembre", hora: "8am", presion: "122/80" },
    { fecha: "4 de diciembre", hora: "6pm", presion: "133/85" },
    { fecha: "5 de diciembre", hora: "8am", presion: "132/77" },
    { fecha: "5 de diciembre", hora: "6pm", presion: "130/83" },
    { fecha: "6 de diciembre", hora: "8am", presion: "127/77" },
    { fecha: "6 de diciembre", hora: "6pm", presion: "131/86" },
    { fecha: "7 de diciembre", hora: "8am", presion: "126/76" },
    { fecha: "7 de diciembre", hora: "6pm", presion: "135/77" },
    { fecha: "8 de diciembre", hora: "8am", presion: "130/86" },
    { fecha: "8 de diciembre", hora: "6pm", presion: "135/86" },
    { fecha: "9 de diciembre", hora: "8am", presion: "123/83" },
    { fecha: "9 de diciembre", hora: "6pm", presion: "138/86" },
    { fecha: "10 de diciembre", hora: "8am", presion: "123/75" },
    { fecha: "10 de diciembre", hora: "6pm", presion: "139/76" },
    { fecha: "11 de diciembre", hora: "8am", presion: "126/78" },
    { fecha: "11 de diciembre", hora: "6pm", presion: "150/86" },
    { fecha: "12 de diciembre", hora: "8am", presion: "127/76" },
    { fecha: "12 de diciembre", hora: "6pm", presion: "145/86" },
    { fecha: "13 de diciembre", hora: "8am", presion: "124/70" },
    { fecha: "13 de diciembre", hora: "6pm", presion: "126/72" },
    { fecha: "14 de diciembre", hora: "8am", presion: "126/71" },
    { fecha: "14 de diciembre", hora: "6pm", presion: "118/69" },
    { fecha: "15 de diciembre", hora: "8am", presion: "127/76" },
    { fecha: "15 de diciembre", hora: "11pm", presion: "144/80" },
    { fecha: "16 de diciembre", hora: "8am", presion: "130/80" },
    { fecha: "16 de diciembre", hora: "6pm", presion: "150/71" },
    { fecha: "17 de diciembre", hora: "8am", presion: "116/60", lpm: 60 },
    { fecha: "17 de diciembre", hora: "6pm", presion: "136/71", lpm: 70 },
    { fecha: "18 de diciembre", hora: "8am", presion: "112/70", lpm: 60 },
    { fecha: "18 de diciembre", hora: "6pm", presion: "134/70", lpm: 68 },
    { fecha: "19 de diciembre", hora: "8am", presion: "120/74", lpm: 59 },
    { fecha: "19 de diciembre", hora: "6pm", presion: "126/70", lpm: 60 },
    { fecha: "20 de diciembre", hora: "8am", presion: "128/71", lpm: 52 },
    { fecha: "20 de diciembre", hora: "6pm", presion: "144/79", lpm: 66 },
    { fecha: "21 de diciembre", hora: "9am", presion: "126/80", lpm: 59 },
    { fecha: "21 de diciembre", hora: "9:01am", presion: "124/74", lpm: 55 },
    { fecha: "21 de diciembre", hora: "3pm", presion: "123/73", lpm: 61 },
    { fecha: "22 de diciembre", hora: "8am", presion: "142/78", lpm: 47 },
    { fecha: "22 de diciembre", hora: "6pm", presion: "131/71", lpm: 58 },
    { fecha: "23 de diciembre", hora: "8am", presion: "132/77", lpm: 56 },
    { fecha: "23 de diciembre", hora: "6pm", presion: "132/66", lpm: 63 },
    { fecha: "24 de diciembre", hora: "8am", presion: "122/74", lpm: 62 },
    { fecha: "24 de diciembre", hora: "6pm", presion: "116/67", lpm: 53 },
    { fecha: "25 de diciembre", hora: "8am", presion: "125/70", lpm: 51 },
    { fecha: "25 de diciembre", hora: "6pm", presion: "122/68", lpm: 68 },
    { fecha: "27 de diciembre", hora: "8am", presion: "124/74", lpm: 57 },
    { fecha: "27 de diciembre", hora: "6pm", presion: "150/94" },
    { fecha: "29 de diciembre", hora: "8am", presion: "125/80", lpm: 75 },
    { fecha: "29 de diciembre", hora: "6pm", presion: "123/71", lpm: 80 },
    { fecha: "30 de diciembre", hora: "8am", presion: "109/75", lpm: 56 },
    { fecha: "30 de diciembre", hora: "6pm", presion: "132/65", lpm: 63 },
    { fecha: "31 de diciembre", hora: "8am", presion: "103/71", lpm: 75 },
    { fecha: "31 de diciembre", hora: "6pm", presion: "130/71", lpm: 66 },
    { fecha: "1 de enero", hora: "8am", presion: "130/75", lpm: 66 },
    { fecha: "1 de enero", hora: "6pm", presion: "115/79" },
    { fecha: "2 de enero", hora: "8am", presion: "119/69", lpm: 69 },
    { fecha: "2 de enero", hora: "6pm", presion: "121/63", lpm: 57 },
    { fecha: "3 de enero", hora: "8am", presion: "104/74", lpm: 50 },
    { fecha: "3 de enero", hora: "6pm", presion: "121/69", lpm: 58 },
    { fecha: "4 de enero", hora: "8am", presion: "121/69", lpm: 54 },
    { fecha: "4 de enero", hora: "6pm", presion: "120/73", lpm: 53 },
    { fecha: "5 de enero", hora: "8am", presion: "119/71", lpm: 54 },
    { fecha: "5 de enero", hora: "6pm", presion: "121/75", lpm: 54 },
    { fecha: "6 de enero", hora: "8am", presion: "120/67", lpm: 53 },
    { fecha: "6 de enero", hora: "6pm", presion: "118/69", lpm: 57 },
    { fecha: "7 de enero", hora: "8am", presion: "105/78", lpm: 52 },
    { fecha: "7 de enero", hora: "6pm", presion: "127/81", lpm: 47 },
    { fecha: "8 de enero", hora: "8am", presion: "136/79", lpm: 52 },
    { fecha: "8 de enero", hora: "6pm", presion: "148/76", lpm: 49 },
    { fecha: "9 de enero", hora: "8am", presion: "128/76", lpm: 47 },
    { fecha: "9 de enero", hora: "6pm", presion: "143/73", lpm: 49 },
    { fecha: "10 de enero", hora: "8am", presion: "135/80", lpm: 47 },
    { fecha: "10 de enero", hora: "6pm", presion: "147/89", lpm: 43 },
    { fecha: "11 de enero", hora: "8am", presion: "131/67", lpm: 50 },
    { fecha: "11 de enero", hora: "6pm", presion: "124/77", lpm: 54 },
    { fecha: "12 de enero", hora: "8am", presion: "131/76", lpm: 54 },
    { fecha: "12 de enero", hora: "6pm", presion: "125/73", lpm: 55 },
    { fecha: "13 de enero", hora: "8am", presion: "123/71", lpm: 57 },
    { fecha: "13 de enero", hora: "6pm", presion: "113/57", lpm: 54 },
    { fecha: "14 de enero", hora: "8am", presion: "120/63", lpm: 51 },
    { fecha: "14 de enero", hora: "6pm", presion: "123/68", lpm: 53 },
    { fecha: "15 de enero", hora: "8am", presion: "125/74", lpm: 49 },
    { fecha: "15 de enero", hora: "6pm", presion: "131/79", lpm: 51 },
    { fecha: "16 de enero", hora: "8am", presion: "126/75", lpm: 56 },
    { fecha: "16 de enero", hora: "6pm", presion: "121/72", lpm: 55 },
    { fecha: "17 de enero", hora: "8am", presion: "125/74", lpm: 49 },
    { fecha: "17 de enero", hora: "6pm", presion: "121/72", lpm: 71 },
    { fecha: "18 de enero", hora: "8am", presion: "120/74", lpm: 50 },
    { fecha: "18 de enero", hora: "6pm", presion: "124/61", lpm: 60 },
    { fecha: "19 de enero", hora: "8am", presion: "123/71", lpm: 54 },
    { fecha: "19 de enero", hora: "6pm", presion: "128/66", lpm: 66 },
    { fecha: "20 de enero", hora: "8am", presion: "134/72", lpm: 49 },
    { fecha: "20 de enero", hora: "6pm", presion: "133/75", lpm: 55 },
    { fecha: "21 de enero", hora: "8am", presion: "132/77", lpm: 57 },
    { fecha: "21 de enero", hora: "6pm", presion: "150/89", lpm: 57 },
    { fecha: "22 de enero", hora: "8am", presion: "130/68", lpm: 52 },
    { fecha: "22 de enero", hora: "6pm", presion: "128/74", lpm: 56 },
    { fecha: "23 de enero", hora: "8am", presion: "133/77", lpm: 55 },
    { fecha: "23 de enero", hora: "6pm", presion: "138/78", lpm: 57 },
    { fecha: "24 de enero", hora: "8am", presion: "123/75", lpm: 54 },
    { fecha: "24 de enero", hora: "6pm", presion: "135/65", lpm: 54 },
    { fecha: "25 de enero", hora: "8am", presion: "124/72", lpm: 56 },
    { fecha: "25 de enero", hora: "6pm", presion: "126/72", lpm: 52 },
    { fecha: "26 de enero", hora: "8am", presion: "117/69", lpm: 53 },
    { fecha: "26 de enero", hora: "6pm", presion: "126/65", lpm: 61 },
    { fecha: "27 de enero", hora: "8am", presion: "110/64", lpm: 51 },
    { fecha: "27 de enero", hora: "6pm", presion: "126/67", lpm: 57 },
    { fecha: "28 de enero", hora: "8am", presion: "128/73", lpm: 50 },
    { fecha: "28 de enero", hora: "6pm", presion: "125/66", lpm: 52 },
    { fecha: "29 de enero", hora: "8am", presion: "127/72", lpm: 58 },
    { fecha: "29 de enero", hora: "6pm", presion: "130/72", lpm: 59 },
];


}
