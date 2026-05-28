import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLayout } from '../../components/templates/auth-layout/auth-layout';
import { LoginForm } from '../../components/organisms/login-form/login-form';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { ToastService } from '../../services/toast.service';
import { LoginRequestDTO } from '../../models/model';

@Component({
  selector: 'app-login',
  imports: [AuthLayout, LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private toastService: ToastService,
    private router: Router,
  ) {}

  onLogin(data: LoginRequestDTO): void {
    this.authService.login(data).subscribe({
      next: (usuario) => {
        this.sessionService.setUsuario(usuario);
        this.router.navigate(['/dashboard']);
      },
      error: (e) => {
        const msg = e.status === 401 || e.status === 404
          ? 'Correo o contraseña incorrectos.'
          : 'Error al iniciar sesión. Intenta de nuevo.';
        this.toastService.show(msg);
      },
    });
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }
}
