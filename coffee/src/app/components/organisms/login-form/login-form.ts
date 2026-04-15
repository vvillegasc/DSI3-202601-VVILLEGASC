import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoginHeader } from '../../molecules/login-header/login-header';
import { CredentialsForm } from '../../molecules/credentials-form/credentials-form';
import { FormActions } from '../../molecules/form-actions/form-actions';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login-form',
  imports: [LoginHeader, CredentialsForm, FormActions],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  @Output() goToRegister = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  showError: boolean = false;

  private loginService = inject(LoginService);

  submitForm(): void {
    if (this.loginService.login(this.email, this.password)) {
      this.showError = false;
      this.onSubmit.emit();
    } else {
      this.showError = true;
    }
  }
}
