import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';

@Component({
  selector: 'app-personal-data-form',
  imports: [InputField],
  templateUrl: './personal-data-form.html',
  styleUrl: './personal-data-form.css',
})
export class PersonalDataForm {
  @Input() cedula: string = '';
  @Output() cedulaChange = new EventEmitter<string>();
  @Input() nombre: string = '';
  @Output() nombreChange = new EventEmitter<string>();
  @Input() apellidos: string = '';
  @Output() apellidosChange = new EventEmitter<string>();
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  @Input() ciudad: string = '';
  @Output() ciudadChange = new EventEmitter<string>();
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
}
