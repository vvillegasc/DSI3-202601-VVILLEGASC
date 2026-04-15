import { Component, Input } from '@angular/core';
import { ContactInput } from '../../atoms/contact-input/contact-input';

export interface ContactFieldConfig {
  type: string;
  placeholder: string;
  required?: boolean;
}

@Component({
  selector: 'app-contact-form-row',
  imports: [ContactInput],
  templateUrl: './contact-form-row.html',
  styleUrl: './contact-form-row.css',
})
export class ContactFormRow {
  @Input() fields: ContactFieldConfig[] = [];
}
