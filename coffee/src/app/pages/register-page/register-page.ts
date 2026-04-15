import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterFormComponent } from '../../components/organisms/register-form-component/register-form-component';
import { LoginTemplate } from '../../templates/login-template/login-template';

@Component({
  selector: 'app-register-page',
  imports: [RegisterFormComponent, LoginTemplate],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
