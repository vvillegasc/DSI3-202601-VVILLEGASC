import { Component } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { ErrorMessage } from '../../atoms/error-message/error-message';

@Component({
  selector: 'app-credentials-form',
  imports: [InputField, ErrorMessage],
  templateUrl: './credentials-form.html',
  styleUrl: './credentials-form.css',
})
export class CredentialsForm {}
