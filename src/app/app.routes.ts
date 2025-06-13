import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { Odontologodisponible } from './pages/private/odontologodisponible/odontologodisponible';
import { HistoriaClinica } from './pages/private/historia-clinica/historia-clinica';
import { HistoriaClinicaNewForm } from './pages/private/historia-clinica/new-form/new-form';

export const routes: Routes = [
    { path: "home" ,component: Home},
    { path: "login" , component: Login},
    { path: "register" , component: Register},

    { path: "admin/disponibilidad", component: Odontologodisponible },
    { path: "admin/historiaClinica", component: HistoriaClinica },
    { path: "admin/historiaClinica/new", component: HistoriaClinicaNewForm },
    { path: "**", redirectTo:"home", pathMatch:"full"},
    { path: "", redirectTo: "home", pathMatch: "full"},

];
