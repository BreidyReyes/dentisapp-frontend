import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { Disponibilidad } from './pages/private/disponibilidad/disponibilidad';
import { disponibilidadNewForm } from './pages/private/disponibilidad/new-form/new-form';

export const routes: Routes = [
    { path: "home" ,component: Home},
    { path: "login" , component: Login},
    { path: "register" , component: Register},
    { path: "admin/disponibilidad", component: Disponibilidad},
    { path: "admin/disponibilidad/new", component: disponibilidadNewForm},

    { path: "**", redirectTo:"home", pathMatch:"full"},
    { path: "", redirectTo: "home", pathMatch: "full"},

];
