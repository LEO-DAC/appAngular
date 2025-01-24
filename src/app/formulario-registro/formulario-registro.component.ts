import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario-registro',
  template: `
      <div class="form-container">
        <form>
          <!-- Campo Fecha -->
          <label for="fecha">Fecha</label>
          <input type="date" id="fecha" name="fecha" required />

          <!-- Campo Hora -->
          <label for="hora">Hora</label>
          <select id="hora" name="hora" required>
            <option value="" disabled selected>Seleccione la hora</option>
          </select>

          <!-- Campo Minuto -->
          <label for="minuto">Minuto</label>
          <select id="minuto" name="minuto" required>
            <option value="" disabled selected>Seleccione el minuto</option>
            <!-- Generar minutos de 0 a 59 -->
          </select>

          <!-- Campo Presión Sistólica -->
          <label for="sistolica">Presión Sistólica</label>
          <input type="number" id="sistolica" name="sistolica" min="0" required />

          <!-- Campo Presión Diastólica -->
          <label for="diastolica">Presión Diastólica</label>
          <input type="number" id="diastolica" name="diastolica" min="0" required />

          <!-- Campo Pulso -->
          <label for="pulso">Pulso</label>
          <input type="number" id="pulso" name="pulso" min="0" required />

          <!-- Botón Guardar -->
          <button type="submit">Guardar</button>
        </form>
      </div>
  `,

  styles: [
    `
   /* Contenedor del formulario */
   .form-container {
      max-width: 400px;
      margin: 2rem auto;
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-family: 'Arial', sans-serif;
    }

    /* Estilos de las etiquetas */
    label {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }

    /* Estilos de los campos de entrada */
    input, select {
      width: 100%;
      padding: 0.75rem;
      font-size: 14px;
      border: 1px solid #cccccc;
      border-radius: 4px;
      margin-bottom: 1rem;
      transition: border-color 0.3s ease;
    }

    /* Efecto hover y focus en los campos */
    input:focus, select:focus {
      border-color: #4caf50;
      outline: none;
    }

    /* Botón de envío */
    button {
      width: 100%;
      padding: 0.75rem;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      background-color: #4caf50;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    /* Efecto hover en el botón */
    button:hover {
      background-color: #45a049;
    }
    `,
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


