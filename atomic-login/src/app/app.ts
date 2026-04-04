import { Component } from '@angular/core';
import { LoginPage } from './pages/login-page/login-page';

@Component({
  selector: 'app-root',
  imports: [LoginPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
