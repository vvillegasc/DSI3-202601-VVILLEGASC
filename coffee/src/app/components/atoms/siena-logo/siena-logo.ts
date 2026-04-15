import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-siena-logo',
  imports: [],
  templateUrl: './siena-logo.html',
  styleUrl: './siena-logo.css',
})
export class SienaLogo {
  @Input() variant: 'hero' | 'about' | 'footer' | 'auth' = 'hero';
}
