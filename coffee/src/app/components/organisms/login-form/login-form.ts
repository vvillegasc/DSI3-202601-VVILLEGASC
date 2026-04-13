import { Component, EventEmitter, Output } from '@angular/core';
import { LoginHeader } from '../../molecules/login-header/login-header';
import { CredentialsForm } from '../../molecules/credentials-form/credentials-form';
import { FormActions } from '../../molecules/form-actions/form-actions';

@Component({
  selector: 'app-login-form',
  imports: [LoginHeader, CredentialsForm, FormActions],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  @Output() goToRegister = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<void>();
}
