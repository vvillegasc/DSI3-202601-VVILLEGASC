import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css',
})
export class NavLink {
  @Input() href: string = '';
  @Input() route: string = '';
  @Input() fragment: string = '';
  @Input() label: string = '';
}
