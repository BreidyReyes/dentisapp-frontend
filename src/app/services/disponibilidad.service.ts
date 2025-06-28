import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor( private http:HttpClient) { }

  getDisponibilidad() {
    return this.http.get('http://localhost:3000/api/disponibilidad')
    
  }
  registrarDisponibilidad(newDisponibilidad: any) {
    return this.http.post("http://localhost:3000/api/disponibilidad", newDisponibilidad)
  }
}
