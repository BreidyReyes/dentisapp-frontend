import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private _authUserData: any = null;

  constructor(private http: HttpClient) { }

  loginUser(credentials: any) {
    return this.http.post('http://localhost:3000/api/auth/login', credentials);
  }

  saveLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  deleteLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  verifyAuthenticateUser() {
    return this.http.get('http://localhost:3000/api/auth/re-new-token', { headers: this.getHeaders() })
      .pipe(
        map((data: any) => {
          console.log('services', data);
          // Guardamos token y datos de usuario si vienen
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          if (data.data) {
            localStorage.setItem('user', JSON.stringify(data.data));
            this._authUserData = data.data;
          }
          return data.token;
        }),
        catchError(() => {
          return of(false);
        })
      );
  }

  getHeaders() {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders().set('X-Token', token);
  }

  get userData(): any {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      this._authUserData = JSON.parse(storedData);
    }
    return this._authUserData;
  }

  hasRole(expectedRoles: string[]): boolean {
    const userRole = this.userData?.role || '';
    return expectedRoles.includes(userRole);
  }
}