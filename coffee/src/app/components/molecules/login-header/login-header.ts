import { Component } from '@angular/core';
import { AppLogo } from '../../atoms/app-logo/app-logo';

@Component({
  selector: 'app-login-header',
  imports: [AppLogo],
  templateUrl: './login-header.html',
  styleUrl: './login-header.css',
})
export class LoginHeader {}
