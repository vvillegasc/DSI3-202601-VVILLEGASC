import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { ErrorMessage } from '../../atoms/error-message/error-message';

@Component({
  selector: 'app-credentials-form',
  imports: [InputField, ErrorMessage],
  templateUrl: './credentials-form.html',
  styleUrl: './credentials-form.css',
})
export class CredentialsForm {
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
  @Input() showError: boolean = false;
}
