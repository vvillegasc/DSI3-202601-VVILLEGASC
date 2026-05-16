import { Routes } from '@angular/router';
import { CafeteriaPage } from './pages/cafeteria-page/cafeteria-page';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  { path: 'cafeteria', component: CafeteriaPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'dashboard', component: DashboardPage },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
