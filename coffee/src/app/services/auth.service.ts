import { Injectable } from '@angular/core';

export interface StoredUser {
  cedula: string;
  nombre: string;
  email: string;
  carrera: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'siena_users';

  register(user: StoredUser): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.KEY, JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    return this.getUsers().some(u => u.email === email && u.password === password);
  }

  private getUsers(): StoredUser[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
