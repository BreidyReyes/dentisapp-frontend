import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaServices {

  constructor( private http: HttpClient ) { }

  createHistoriaClinica( data: any ) {
    return this.http.post( 'http://localhost:3000/api', data )
  }
}

