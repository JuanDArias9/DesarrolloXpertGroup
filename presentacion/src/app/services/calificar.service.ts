import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversacion } from '../models/conversacion';
import { VistaCalificacionComponent } from '../vista-calificacion/vista-calificacion.component';

@Injectable({
  providedIn: 'root'
})
export class CalificarService {

  selectedConversacion : Conversacion;
  conversaciones: Conversacion[];
  readonly urlApi = 'http://localhost:3000/api/calificar';

  constructor(private http : HttpClient) { 
      this.selectedConversacion = new Conversacion();
  }

  // Calificar Conversacion
  calificarConversacion(conversacion : Conversacion) {
      let jsonReq = JSON.stringify({conversacion: conversacion.conversacion.trim().split('\n')});
      return this.http.post(this.urlApi, JSON.parse(jsonReq));
  }
}
