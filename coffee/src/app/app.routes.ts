import { Routes } from '@angular/router';
import { CafeteriaPage } from './pages/cafeteria-page/cafeteria-page';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';

export const routes: Routes = [
  { path: 'cafeteria', component: CafeteriaPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: '', redirectTo: 'cafeteria', pathMatch: 'full' },
];
