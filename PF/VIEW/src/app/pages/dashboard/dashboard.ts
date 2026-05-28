import { Component, OnInit, signal } from '@angular/core';
import { DashboardLayout } from '../../components/templates/dashboard-layout/dashboard-layout';
import { StatCard } from '../../components/molecules/stat-card/stat-card';
import { PedidosRecientes } from '../../components/organisms/pedidos-recientes/pedidos-recientes';
import { MesasBoard } from '../../components/organisms/mesas-board/mesas-board';
import { DashboardService } from '../../services/dashboard.service';
import { PedidoService } from '../../services/pedido.service';
import { MesaService } from '../../services/mesa.service';
import { DashboardResumenDTO, MesaResponseDTO, PedidoResponseDTO } from '../../models/model';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardLayout, StatCard, PedidosRecientes, MesasBoard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  resumen = signal<DashboardResumenDTO | null>(null);
  pedidosRecientes = signal<PedidoResponseDTO[]>([]);
  mesas = signal<MesaResponseDTO[]>([]);

  constructor(
    private dashboardService: DashboardService,
    private pedidoService: PedidoService,
    private mesaService: MesaService,
  ) {}

  ngOnInit(): void {
    this.dashboardService.getResumen().subscribe((data) => this.resumen.set(data));

    this.pedidoService.getPedidos().subscribe((data) => {
      const sorted = [...data].sort((a, b) => b.idPedido - a.idPedido);
      this.pedidosRecientes.set(sorted.slice(0, 3));
    });

    this.mesaService.getMesas().subscribe((data) => this.mesas.set(data));
  }

  get mesasDisponiblesLabel(): string {
    const r = this.resumen();
    const total = this.mesas().length;
    if (!r) return '—';
    return total > 0 ? `${r.mesasDisponibles} / ${total}` : `${r.mesasDisponibles}`;
  }
}
