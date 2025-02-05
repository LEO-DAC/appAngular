export interface BitacoraPresion {
    fecha: string;
    hora: string;
    presion: string; // El formato de la presión es un string con la forma "sistólica/diastólica"
    lpm?: number; // Opcional, ya que algunas entradas no tienen pulsaciones
}