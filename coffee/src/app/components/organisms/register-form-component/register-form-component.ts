import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterHeader } from '../../molecules/register-header/register-header';
import { PersonalDataForm } from '../../molecules/personal-data-form/personal-data-form';
import { FormActions } from '../../molecules/form-actions/form-actions';

@Component({
  selector: 'app-register-form-component',
  imports: [RegisterHeader, PersonalDataForm, FormActions],
  templateUrl: './register-form-component.html',
  styleUrl: './register-form-component.css',
})
export class RegisterFormComponent {
  @Output() goToLogin = new EventEmitter<void>();
}
