import { Component } from '@angular/core';
import { NavLink } from '../../atoms/nav-link/nav-link';

@Component({
  selector: 'app-navbar',
  imports: [NavLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
