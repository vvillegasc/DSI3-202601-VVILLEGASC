import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoRequestDTO, ProductoResponseDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private readonly BASE_URL = 'http://localhost:9000/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(categoria?: string, disponible?: boolean): Observable<ProductoResponseDTO[]> {
    let params = new HttpParams();
    if (categoria) params = params.set('categoria', categoria);
    if (disponible !== undefined) params = params.set('disponible', String(disponible));
    return this.http.get<ProductoResponseDTO[]>(this.BASE_URL, { params });
  }

  getProducto(id: number): Observable<ProductoResponseDTO> {
    return this.http.get<ProductoResponseDTO>(`${this.BASE_URL}/${id}`);
  }

  crearProducto(body: ProductoRequestDTO): Observable<ProductoResponseDTO> {
    return this.http.post<ProductoResponseDTO>(this.BASE_URL, body);
  }

  actualizarProducto(id: number, body: ProductoRequestDTO): Observable<ProductoResponseDTO> {
    return this.http.put<ProductoResponseDTO>(`${this.BASE_URL}/${id}`, body);
  }

  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
