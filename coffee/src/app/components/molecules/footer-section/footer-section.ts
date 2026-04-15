import { Component, Input } from '@angular/core';
import { FooterText } from '../../atoms/footer-text/footer-text';

@Component({
  selector: 'app-footer-section',
  imports: [FooterText],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {
  @Input() heading: string = '';
  @Input() texts: string[] = [];
}
