import { Component, OnInit } from '@angular/core';
import { CalificarService } from '../services/calificar.service';
import { NgForm } from '@angular/forms';
import { Conversacion } from '../models/conversacion';

@Component({
  selector: 'app-vista-calificacion',
  templateUrl: './vista-calificacion.component.html',
  styleUrls: ['./vista-calificacion.component.css'],
  providers: [CalificarService]
})
export class VistaCalificacionComponent implements OnInit {

  constructor(private calificarService : CalificarService) { }

  conversacion = '';
  puntajeTotal = 0;
  numeroEstrellas = '';
  mensaje = ''; 

  ngOnInit(): void {
  }

  // Función - Calificar Conversacion
  calificarConversacion(form : NgForm) {
    console.log(form.value.conversacion);
    if(form.value.conversacion == "") {
      alert("Digite una conversacion válida para calificar!");
    } else {
      this.calificarService.calificarConversacion(form.value)
      .subscribe(res => {
        this.conversacion = form.value.conversacion;
        this.puntajeTotal = res['totalPuntos'];
        this.numeroEstrellas = res['numEstrellas']
      })
    }    
  }

  // Función - Limpia Input Conversación
  limpiarConversacion(form? : NgForm) {
    if(form) {
      this.conversacion = '';
      this.puntajeTotal = 0;
      this.numeroEstrellas = '';
      this.calificarService.selectedConversacion = new Conversacion();
    }
  }
}
