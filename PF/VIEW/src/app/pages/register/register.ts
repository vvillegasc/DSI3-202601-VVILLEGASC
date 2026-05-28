import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLayout } from '../../components/templates/auth-layout/auth-layout';
import { RegisterForm } from '../../components/organisms/register-form/register-form';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { RegistroRequestDTO } from '../../models/model';

@Component({
  selector: 'app-register',
  imports: [AuthLayout, RegisterForm],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) {}

  onRegister(data: RegistroRequestDTO): void {
    this.authService.registro(data).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (e) => {
        const msg = e.status === 409
          ? 'El correo ya está registrado.'
          : 'Error al crear la cuenta. Intenta de nuevo.';
        this.toastService.show(msg);
      },
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
