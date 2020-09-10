export class Conversacion {

    conversacion: string;
    puntajeTotal: number;
    numeroEstrellas: string;

    constructor(conversacion = '', puntajeTotal = 0, numeroEstrellas = ''){
        this.conversacion = conversacion;
        this.puntajeTotal = puntajeTotal;
        this.numeroEstrellas = numeroEstrellas;
    }
}
