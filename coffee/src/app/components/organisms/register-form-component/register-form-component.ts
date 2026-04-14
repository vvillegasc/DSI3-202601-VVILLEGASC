import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RegisterHeader } from '../../molecules/register-header/register-header';
import { PersonalDataForm } from '../../molecules/personal-data-form/personal-data-form';
import { FormActions } from '../../molecules/form-actions/form-actions';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register-form-component',
  imports: [RegisterHeader, PersonalDataForm, FormActions],
  templateUrl: './register-form-component.html',
  styleUrl: './register-form-component.css',
})
export class RegisterFormComponent {
  @Output() goToLogin = new EventEmitter<void>();
  @Output() onRegister = new EventEmitter<void>();

  cedula: string = '';
  nombre: string = '';
  email: string = '';
  carrera: string = '';
  password: string = '';

  private loginService = inject(LoginService);

  submitForm(): void {
    const user: User = {
      cedula: this.cedula,
      nombre: this.nombre,
      email: this.email,
      carrera: this.carrera,
      password: this.password,
    };
    console.log('[RegisterForm] submitForm() called', user);
    this.loginService.register(user);
    console.log('[RegisterForm] saved to localStorage:', localStorage.getItem('siena_users'));
    this.onRegister.emit();
  }
}
