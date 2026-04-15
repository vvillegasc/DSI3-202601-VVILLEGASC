import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

const CARRERA_LABELS: Record<string, string> = {
  is: 'Ingeniería de sistemas',
  admin: 'Administración de empresas',
};

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {
  private loginService = inject(LoginService);
  private router = inject(Router);

  user: User | null = null;

  ngOnInit(): void {
    this.user = this.loginService.currentUser;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  get carreraLabel(): string {
    if (!this.user) return '';
    return CARRERA_LABELS[this.user.carrera] ?? this.user.carrera;
  }

  get initials(): string {
    if (!this.user?.nombre) return '?';
    return this.user.nombre
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
