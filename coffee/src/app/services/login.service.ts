import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly KEY = 'siena_users';

  register(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.KEY, JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    return this.getUsers().some(u => u.email === email && u.password === password);
  }

  private getUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
