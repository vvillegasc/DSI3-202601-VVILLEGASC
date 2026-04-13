import { Component } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { InputSelect } from '../../atoms/input-select/input-select';

@Component({
  selector: 'app-personal-data-form',
  imports: [InputField, InputSelect],
  templateUrl: './personal-data-form.html',
  styleUrl: './personal-data-form.css',
})
export class PersonalDataForm {}
