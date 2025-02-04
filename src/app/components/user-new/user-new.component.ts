import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../shared/interfaces/user.interface';
@Component({
  selector: 'user-new',
  imports: [ReactiveFormsModule],
  templateUrl: './user-new.component.html',
  styleUrl: './user-new.component.css'
})
export class UserNewComponent {
  add = output<Usuario>();
  readonly #formBuilder =  inject(FormBuilder);
  message = '';
  userForm:FormGroup = this.#formBuilder.group({
   nombre:       ['leo', Validators.required],  
   apellido:   ['alonso', Validators.required],
   peso:       [10, [Validators.required,Validators.min(1),Validators.max(500)]],
   altura:     [15, Validators.required],
   edad:       [20, [Validators.required,Validators.min(1),Validators.max(100)]], 
   sexo:       ['F', Validators.required],
   hipertenso: [false, Validators.required], 
   img:        ['/favicon.ico', Validators.required]
  })

  addUser(){
    if(this.userForm.invalid){
      this.message = 'El formulario no tiene todos los campos llenos correctamente';
      return;
    }else{
      const usuario: Usuario = {
         id: Math.floor(Math.random() * 100)+1,
         ...this.userForm.value
       };
       console.log("usuario creado",usuario);
       this.add.emit(usuario);
    }
  }

}
