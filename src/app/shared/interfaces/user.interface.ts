export interface Usuario {
    nombre: string;
    apellido: string;
    img: string;
    sexo: string;
    edad: number;
    peso: number;
    altura: number;
    hipertenso: boolean;
    id: number;
}

export interface registro {
    id: number; //id del registro
    idUsuario: number; //id del usuario
    fecha: string;
    hora: number;
    minuto: number;
    sistolica: number;
    diastolica: number;
    pulso: number;
}
