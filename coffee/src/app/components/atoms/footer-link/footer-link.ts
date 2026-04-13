import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  imports: [],
  templateUrl: './footer-link.html',
  styleUrl: './footer-link.css',
})
export class FooterLink {
  @Input() href: string = '#';
  @Input() label: string = '';
}
