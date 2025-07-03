import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Odontologodisponible } from './pages/private/odontologodisponible/odontologodisponible';
import { HistoriaClinica } from './pages/private/historia-clinica/historia-clinica';
import { HistoriaClinicaNewForm } from './pages/private/historia-clinica/new-form/new-form';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: "home" ,component: Home},
    { path: "login" , component: Login},
    { path: "register" , component: Register},
    { path: "dashboard", component: Dashboard, canActivate: [ authGuard ] },
    { path: "admin/disponibilidad", component: Odontologodisponible, canActivate: [ authGuard ] },
    { path: "admin/historiaClinica", component: HistoriaClinica, canActivate: [ authGuard ] },
    { path: "admin/historiaClinica/new", component: HistoriaClinicaNewForm, canActivate: [ authGuard ] },
    { path: "**", redirectTo:"home", pathMatch:"full"},
    { path: "", redirectTo: "home", pathMatch: "full"},

];
