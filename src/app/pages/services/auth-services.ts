import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor( private http: HttpClient ) { }

  loginUser ( credentials: any ) {    // credentials: {username: 'jcarlosj.dev@gmail.com', password: 'wqeqweqw'}
    return this.http.post( 'http://localhost:3000/api/auth/login', credentials );
  }

  //  02/07  REVISAR Y COMPLETAR LO Q HACE FALTA
  saveLocalStorage( key: string ) {
    localStorage.removeItem( key );
  }

  deleteLocalStorage( key: string ) {
    localStorage.removeItem( key );
  }

  verifyAuthenticateUser() {
    return this.http.get( 'http://localhost:3000/api/auth/re/new-token', { headers: this.getHeaders() } )
  }

  getHeaders() {
    const token = localStorage.getItem( 'token' ) ?? '';
    return new HttpHeaders().set( 'X-Token', token );
  }
}