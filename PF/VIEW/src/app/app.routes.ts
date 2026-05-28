import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Productos } from './pages/productos/productos';
import { Mesas } from './pages/mesas/mesas';
import { Clientes } from './pages/clientes/clientes';
import { Pedidos } from './pages/pedidos/pedidos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Register },
  { path: 'dashboard',  component: Dashboard,  canActivate: [authGuard] },
  { path: 'productos',  component: Productos,  canActivate: [authGuard] },
  { path: 'mesas',      component: Mesas,      canActivate: [authGuard] },
  { path: 'clientes',   component: Clientes,   canActivate: [authGuard] },
  { path: 'pedidos',    component: Pedidos,    canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
