import { Component } from '@angular/core';
import { SectionHeading } from '../../atoms/section-heading/section-heading';
import { SienaLogo } from '../../atoms/siena-logo/siena-logo';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading, SienaLogo],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {}
