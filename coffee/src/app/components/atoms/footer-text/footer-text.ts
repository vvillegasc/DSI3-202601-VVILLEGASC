import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-text',
  imports: [],
  templateUrl: './footer-text.html',
  styleUrl: './footer-text.css',
})
export class FooterText {
  @Input() text: string = '';
}
