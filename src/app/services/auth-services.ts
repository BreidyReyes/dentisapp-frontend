import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

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
      .pipe( 
        map( (data: any ) => {
        console.log( 'Service', data );

        return data.token;
      }),
      catchError( () => {
        return of(false)
      }),



    // Ejemplo de rxjs
    // return this.http.get( 'http://localhost:3000/api/auth/re/new-token', { headers: this.getHeaders() } )
    //            .pipe( 
    //               tap( ( data ) => {
    //                 console.log( data );

    //                 return data;
    //               }),
    //               map((newData: any) => {
    //                 return newData.token.length;
    //               }),
    //               catchError( () => {
    //                 return of( false );
    //               })
    //           );
  )}

  getHeaders() {
    const token = localStorage.getItem( 'token' ) ?? '';
    return new HttpHeaders().set( 'X-Token', token );
  }
}