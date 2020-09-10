// Calificar Conversación

// Clase Calificar
class Calificar {

    constructor(conversacion) {
        this.conversacion = conversacion;
        this.palabraCalfAlta = 'EXCELENTE SERVICIO';
        this.palabarasEvaluar = ['Gracias', 'Buena Atención', 'Muchas Gracias'];
        this.puntajeTotal = 0;
    }

    calificarConversacion() {
        try {    
                
            if(this.conversacion != '') {
                // Mostrar el mensaje especifico en la consola
                console.log("CONVERSACIÓN: \n" + this.conversacion);
                
                // Calificar Mensajes
                this.puntajeTotal = this.puntajeTotal + this.calificarNumMensajes(this.conversacion);
    
                console.log("PUNTAJE TOTAL MENSAJES " + this.puntajeTotal);
    
                if(this.puntajeTotal > 0) {
                    // Calificar coincidencias palabra 'URGENTE'
                    this.puntajeTotal = this.puntajeTotal + this.calificarPalUrgente(this.conversacion);
    
                    console.log("PUNTAJE TOTAL PALABRA URGENTE " + this.puntajeTotal);
                    
                    if(this.puntajeTotal > 0 || this.puntajeTotal == 0) {
    
                        // Calificar coincidencias palabra 'EXCELENTE SERVICIO'
                        this.puntajeTotal = this.puntajeTotal + this.calificarCoincidenciasPlbs(this.palabraCalfAlta);
    
                        console.log("PUNTAJE TOTAL PALABRA EXCELENTE SERVICIO " + this.puntajeTotal);
    
                        if(this.puntajeTotal < 100) {
                            for(let i=0; i < this.palabarasEvaluar.length; i++) {
                                this.puntajeTotal = this.puntajeTotal + this.calificarCoincidenciasPlbs(this.palabarasEvaluar[i]);
        
                                console.log("PUNTAJE TOTAL PALABRA " + this.palabarasEvaluar[i] + " - " + this.puntajeTotal);
                            }
        
                            if(this.puntajeTotal > 0 || this.puntajeTotal == 0){
                                if(this.puntajeTotal > 0 || this.puntajeTotal == 0){
                                    // Calificar duración de la conversación
                                    this.puntajeTotal = this.puntajeTotal + this.calificarTiempoDuracion();
                                }  
                            }  
                        }
                                                             
                    }
                }

                return {status: true, mensaje: "Calificación Exitosa!", totalPuntos: this.puntajeTotal, numEstrellas: this.calacularNumEstrellas(parseInt(this.puntajeTotal))};

            }
            else {
                return {status: false, mensaje: "Cuerpo Invalido. La conversación no puede ser vacia!", totalPuntos: 0, numEstrellas: 0};
            }
        } catch (error) {
            console.error(error);
            return {status: false, mensaje: "Error: " + error , totalPuntos: 0, numEstrellas: 0};
        }
    }
    
    // Calificar Numero Mensajes
    calificarNumMensajes() {
        let puntos = 0;
    
        // Indicar cuantos mensaje hay
        console.log("NUMERO DE MENSAJES: \n" + this.conversacion.length);
    
        if(this.conversacion.length == 1){
            puntos = -100;
        }
        else if(this.conversacion.length <= 5) {
            puntos = 20;
        } 
        else {
            puntos = 10;
        }
    
        return puntos;
    }
    
    // Función - Calcula número de estrellas
    calacularNumEstrellas(puntaje) {
    
        let numEstrellas = '';
    
        if(puntaje === 0) {
            numEstrellas =  '';
        } else if(puntaje > 0 && puntaje <= 25) {
            numEstrellas = '*';
        } else if(puntaje > 25 && puntaje <= 50) {
            numEstrellas = '**';
        } else if(puntaje > 50 && puntaje <= 75) {
            numEstrellas = '***';
        } else if(puntaje > 75 && puntaje <= 90){
            numEstrellas = '****';
        } else if(puntaje > 90) {
            numEstrellas = '*****';
        }
    
        return numEstrellas;
    }
    
    // Función - Califica Coincidencias Palabra 'URGENTE'
    calificarPalUrgente() {
        let puntos = 0;
        let conteo = 0;
    
        for(let i=0; i < this.conversacion.length; i++){
            
            this.conversacion[i] = this.conversacion[i].replace(/[.,]/g, '');
            console.log(this.conversacion[i]);
    
            let linea = this.conversacion[i].split(" ");
    
            for(let j=0; j < linea.length; j++){
                console.log(linea[j]);
                if(linea[j] === 'URGENTE'){
                    conteo++;
                }
            }    
        }
    
        console.log(conteo);
    
        if(conteo <= 2) {
            puntos = -5;
        } else if(conteo > 2){
            puntos = -10;
        } else {
            puntos = 0;
        }
    
        return puntos;
    }
    
    // Función - Califica Coincidencias Palabras definidas
    calificarCoincidenciasPlbs(palabra) {
    
        let puntos = 0;
    
        for(let i=0; i < this.conversacion.length; i++){
            
            console.log(this.conversacion[i]);

            console.log(palabra);
    
            let result = this.conversacion[i].indexOf(palabra);
    
            console.log(result);
    
            if(result != -1){
                if(palabra === this.palabraCalfAlta) {
                    puntos = 100;
                    break;
                }
                else{
                    puntos = 10;
                }          
            }    
        }
    
        return puntos;
    }
    
    // Función - Califica Tiempo Duración
    calificarTiempoDuracion() {
        let puntos = 0;
    
        for(let j=0; j < this.conversacion.length; j++){
            console.log(this.conversacion[j]);
            
            var horaInicio = this.conversacion[0].substring(0,8).split(':');
            var horaFinal = this.conversacion[this.conversacion.length - 1].substring(0,8).split(':');
    
            console.log(horaInicio);
            console.log(horaFinal);
    
            var hora1 = new Date('', '', '', horaInicio[0], horaInicio[1], horaInicio[2]);
    
            var hora2 = new Date('', '', '', horaFinal[0], horaFinal[1], horaFinal[2]);
    
            // Diferencia de horas en segundos
            let dif = (hora2 - hora1) / 1000;
    
            console.log(hora1);
            console.log(hora2);
            console.log(dif);
    
            if(dif < 60) {
                puntos = 50;
            } else {
                puntos = 25;
            }
    
            return puntos;
        }    
    }
}

module.exports = Calificar;