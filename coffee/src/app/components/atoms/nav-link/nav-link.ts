import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  imports: [],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css',
})
export class NavLink {
  @Input() href: string = '#';
  @Input() label: string = '';
}
