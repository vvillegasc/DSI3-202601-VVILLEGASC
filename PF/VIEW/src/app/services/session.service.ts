import { Injectable, signal } from '@angular/core';
import { UsuarioResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly _usuario = signal<UsuarioResponseDTO | null>(null);

  readonly usuario = this._usuario.asReadonly();

  setUsuario(usuario: UsuarioResponseDTO): void {
    this._usuario.set(usuario);
  }

  cerrarSesion(): void {
    this._usuario.set(null);
  }

  isAuthenticated(): boolean {
    return this._usuario() !== null;
  }
}
