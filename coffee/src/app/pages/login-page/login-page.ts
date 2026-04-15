import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../components/organisms/login-form/login-form';
import { LoginTemplate } from '../../templates/login-template/login-template';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm, LoginTemplate],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(private router: Router) {}

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  login(): void {
    this.router.navigate(['/cafeteria']);
  }
}
