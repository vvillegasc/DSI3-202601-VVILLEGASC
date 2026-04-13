import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-input',
  imports: [],
  templateUrl: './contact-input.html',
  styleUrl: './contact-input.css',
})
export class ContactInput {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
}
