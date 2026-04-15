import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly KEY = 'siena_users';
  private readonly SESSION_KEY = 'siena_current_user';

  private _currentUser = signal<User | null>(this.loadSession());

  get currentUser(): User | null {
    return this._currentUser();
  }

  register(user: User): { success: boolean; error?: string } {
    const users = this.getUsers();
    const exists = users.some(u => u.cedula === user.cedula);
    if (exists) {
      return { success: false, error: 'Ya existe un usuario registrado con esa cédula.' };
    }
    users.push(user);
    localStorage.setItem(this.KEY, JSON.stringify(users));
    return { success: true };
  }

  login(email: string, password: string): boolean {
    const user = this.getUsers().find(
      u => u.email === email && u.password === password
    );
    if (user) {
      this._currentUser.set(user);
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(this.SESSION_KEY);
  }

  private loadSession(): User | null {
    try {
      const raw = localStorage.getItem(this.SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private getUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
