import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-textarea',
  imports: [],
  templateUrl: './contact-textarea.html',
  styleUrl: './contact-textarea.css',
})
export class ContactTextarea {
  @Input() placeholder: string = 'Message...';
  @Input() rows: number = 6;
  @Input() required: boolean = false;
}
