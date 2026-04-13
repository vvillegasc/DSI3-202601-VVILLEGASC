import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
  { path: 'auth/login', component: LoginPage },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];
