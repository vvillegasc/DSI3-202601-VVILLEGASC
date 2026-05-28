import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardResumenDTO } from '../models/model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly BASE_URL = 'http://localhost:9000/api/dashboard';

  constructor(private http: HttpClient) {}

  getResumen(): Observable<DashboardResumenDTO> {
    return this.http.get<DashboardResumenDTO>(`${this.BASE_URL}/resumen`);
  }
}
