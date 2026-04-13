import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterFormComponent } from '../../components/organisms/register-form-component/register-form-component';

@Component({
  selector: 'app-register-page',
  imports: [RegisterFormComponent],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
