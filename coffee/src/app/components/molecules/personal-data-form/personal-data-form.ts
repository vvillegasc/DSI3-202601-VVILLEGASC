import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { InputSelect } from '../../atoms/input-select/input-select';

@Component({
  selector: 'app-personal-data-form',
  imports: [InputField, InputSelect],
  templateUrl: './personal-data-form.html',
  styleUrl: './personal-data-form.css',
})
export class PersonalDataForm {
  @Input() cedula: string = '';
  @Output() cedulaChange = new EventEmitter<string>();
  @Input() nombre: string = '';
  @Output() nombreChange = new EventEmitter<string>();
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  @Input() carrera: string = '';
  @Output() carreraChange = new EventEmitter<string>();
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
}
