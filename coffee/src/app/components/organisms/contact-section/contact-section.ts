import { Component } from '@angular/core';
import { SectionHeading } from '../../atoms/section-heading/section-heading';
import { ContactFormRow } from '../../molecules/contact-form-row/contact-form-row';
import { ContactInput } from '../../atoms/contact-input/contact-input';
import { ContactTextarea } from '../../atoms/contact-textarea/contact-textarea';
import { CafeButton } from '../../atoms/cafe-button/cafe-button';

@Component({
  selector: 'app-contact-section',
  imports: [SectionHeading, ContactFormRow, ContactInput, ContactTextarea, CafeButton],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  nameRow = [
    { type: 'text', placeholder: 'First Name*', required: true },
    { type: 'text', placeholder: 'Last Name*', required: true },
  ];

  contactRow = [
    { type: 'email', placeholder: 'Email*', required: true },
    { type: 'tel', placeholder: 'Phone Number*', required: true },
  ];
}
