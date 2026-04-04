import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterFormComponent } from '../../components/organisms/register-form-component/register-form-component';

@Component({
  selector: 'app-register-page',
  imports: [RegisterFormComponent],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  @Output() goToLogin = new EventEmitter<void>();
}
