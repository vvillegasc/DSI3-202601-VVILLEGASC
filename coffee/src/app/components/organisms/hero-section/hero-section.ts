import { Component } from '@angular/core';
import { Navbar } from '../../molecules/navbar/navbar';
import { SienaLogo } from '../../atoms/siena-logo/siena-logo';
import { CafeButton } from '../../atoms/cafe-button/cafe-button';

@Component({
  selector: 'app-hero-section',
  imports: [Navbar, SienaLogo, CafeButton],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
