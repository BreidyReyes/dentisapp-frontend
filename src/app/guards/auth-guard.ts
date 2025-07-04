import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthServices } from '../services/auth-services';
import { catchError, of, tap, map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
const authService = inject( AuthServices );
const router = inject( Router );

authService.verifyAuthenticateUser()
  .pipe(
    map( ( data ) => {
      console.log( 'Guard', data);

      if( !data ) {
        router.navigateByUrl( 'register' )
        return false;
      }

      return true;
    }),
    catchError( () => {
      return of( false );
    })
  );

  return true;
};