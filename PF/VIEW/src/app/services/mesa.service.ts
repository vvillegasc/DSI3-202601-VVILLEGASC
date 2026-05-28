import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MesaRequestDTO, MesaResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class MesaService {
  private readonly BASE_URL = 'http://localhost:9000/api/mesas';

  constructor(private http: HttpClient) {}

  getMesas(estado?: string): Observable<MesaResponseDTO[]> {
    let params = new HttpParams();
    if (estado) params = params.set('estado', estado);
    return this.http.get<MesaResponseDTO[]>(this.BASE_URL, { params });
  }

  getMesa(id: number): Observable<MesaResponseDTO> {
    return this.http.get<MesaResponseDTO>(`${this.BASE_URL}/${id}`);
  }

  crearMesa(body: MesaRequestDTO): Observable<MesaResponseDTO> {
    return this.http.post<MesaResponseDTO>(this.BASE_URL, body);
  }

  actualizarMesa(id: number, body: MesaRequestDTO): Observable<MesaResponseDTO> {
    return this.http.put<MesaResponseDTO>(`${this.BASE_URL}/${id}`, body);
  }

  eliminarMesa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
