import { Component, EventEmitter, Output } from '@angular/core';
import { LoginForm } from '../../components/organisms/login-form/login-form';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  @Output() goToRegister = new EventEmitter<void>();
}
