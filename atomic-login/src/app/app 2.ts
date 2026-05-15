import { Component } from '@angular/core';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';

@Component({
  selector: 'app-root',
  imports: [LoginPage, RegisterPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  page: string = 'login';
}
