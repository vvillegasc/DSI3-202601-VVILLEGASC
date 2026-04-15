import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';

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
}
