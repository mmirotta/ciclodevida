export class Usuario {
    id: number;
    nombre: string;
    email: string;
    pass: string;
    perfil: string;
    foto: string;

    constructor() {
        this.perfil = 'usuario';
        this.nombre = 'Prueba'
    }
}
