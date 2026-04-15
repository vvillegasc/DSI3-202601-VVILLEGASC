import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RegisterHeader } from '../../molecules/register-header/register-header';
import { PersonalDataForm } from '../../molecules/personal-data-form/personal-data-form';
import { FormActions } from '../../molecules/form-actions/form-actions';
import { ErrorMessage } from '../../atoms/error-message/error-message';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register-form-component',
  imports: [RegisterHeader, PersonalDataForm, FormActions, ErrorMessage],
  templateUrl: './register-form-component.html',
  styleUrl: './register-form-component.css',
})
export class RegisterFormComponent {
  @Output() goToLogin = new EventEmitter<void>();
  @Output() onRegister = new EventEmitter<void>();

  cedula: string = '';
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  ciudad: string = '';
  password: string = '';
  errorMessage: string = '';

  private loginService = inject(LoginService);

  submitForm(): void {
    const user: User = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      ciudad: this.ciudad,
      password: this.password,
    };
    const result = this.loginService.register(user);
    if (!result.success) {
      this.errorMessage = result.error ?? 'Error al registrar usuario.';
      return;
    }
    this.errorMessage = '';
    this.onRegister.emit();
  }
}
