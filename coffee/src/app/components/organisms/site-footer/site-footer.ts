import { Component } from '@angular/core';
import { SienaLogo } from '../../atoms/siena-logo/siena-logo';
import { FooterSection } from '../../molecules/footer-section/footer-section';
import { FooterLink } from '../../atoms/footer-link/footer-link';

@Component({
  selector: 'app-site-footer',
  imports: [SienaLogo, FooterSection, FooterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {}
