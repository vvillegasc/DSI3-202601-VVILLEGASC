import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePedidoRequestDTO, PedidoRequestDTO, PedidoResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private readonly BASE_URL = 'http://localhost:9000/api/pedidos';

  constructor(private http: HttpClient) {}

  getPedidos(estado?: string): Observable<PedidoResponseDTO[]> {
    let params = new HttpParams();
    if (estado) params = params.set('estado', estado);
    return this.http.get<PedidoResponseDTO[]>(this.BASE_URL, { params });
  }

  getPedido(id: number): Observable<PedidoResponseDTO> {
    return this.http.get<PedidoResponseDTO>(`${this.BASE_URL}/${id}`);
  }

  crearPedido(body: PedidoRequestDTO): Observable<PedidoResponseDTO> {
    return this.http.post<PedidoResponseDTO>(this.BASE_URL, body);
  }

  eliminarPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

  avanzarEstado(id: number): Observable<PedidoResponseDTO> {
    return this.http.patch<PedidoResponseDTO>(`${this.BASE_URL}/${id}/estado`, {});
  }

  agregarDetalle(idPedido: number, body: DetallePedidoRequestDTO): Observable<PedidoResponseDTO> {
    return this.http.post<PedidoResponseDTO>(`${this.BASE_URL}/${idPedido}/detalles`, body);
  }

  eliminarDetalle(idPedido: number, idDetalle: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${idPedido}/detalles/${idDetalle}`);
  }
}
