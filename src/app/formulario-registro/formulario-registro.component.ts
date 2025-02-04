import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',

  styleUrls: ['./formulario-registro.component.css',
  ],
})
export class FormularioRegistroComponent {
    // Propiedades para almacenar los valores del formulario
    fecha: string = '';
    hora: number | null = null;
    minuto: number | null = null;
    sistolica: number | null = null;
    diastolica: number | null = null;
    pulso: number | null = null;
  
    // Método para actualizar valores en tiempo real
    actualizarCampo(campo: string, valor: any) {
      (this as any)[campo] = valor;
    }
  
    // Método para guardar los datos
    guardarRegistro() {
      const nuevoRegistro = {
        fecha: this.fecha,
        hora: this.hora,
        minuto: this.minuto,
        sistolica: this.sistolica,
        diastolica: this.diastolica,
        pulso: this.pulso
      };
  
      console.log('Datos guardados:', nuevoRegistro);
  
      // Resetear los campos
      this.fecha = '';
      this.hora = null;
      this.minuto = null;
      this.sistolica = null;
      this.diastolica = null;
      this.pulso = null;
    }
  }


