import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteRequestDTO, ClienteResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly BASE_URL = 'http://localhost:9000/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(busqueda?: string): Observable<ClienteResponseDTO[]> {
    let params = new HttpParams();
    if (busqueda) params = params.set('busqueda', busqueda);
    return this.http.get<ClienteResponseDTO[]>(this.BASE_URL, { params });
  }

  getCliente(id: number): Observable<ClienteResponseDTO> {
    return this.http.get<ClienteResponseDTO>(`${this.BASE_URL}/${id}`);
  }

  crearCliente(body: ClienteRequestDTO): Observable<ClienteResponseDTO> {
    return this.http.post<ClienteResponseDTO>(this.BASE_URL, body);
  }

  actualizarCliente(id: number, body: ClienteRequestDTO): Observable<ClienteResponseDTO> {
    return this.http.put<ClienteResponseDTO>(`${this.BASE_URL}/${id}`, body);
  }

  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
