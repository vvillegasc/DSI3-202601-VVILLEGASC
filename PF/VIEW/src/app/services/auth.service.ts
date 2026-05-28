import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestDTO, RegistroRequestDTO, UsuarioResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly BASE_URL = 'http://localhost:9000/api/auth';

  constructor(private http: HttpClient) {}

  login(body: LoginRequestDTO): Observable<UsuarioResponseDTO> {
    return this.http.post<UsuarioResponseDTO>(`${this.BASE_URL}/login`, body);
  }

  registro(body: RegistroRequestDTO): Observable<UsuarioResponseDTO> {
    return this.http.post<UsuarioResponseDTO>(`${this.BASE_URL}/registro`, body);
  }
}
