import { Component, OnInit, signal } from '@angular/core';
import { DashboardLayout } from '../../components/templates/dashboard-layout/dashboard-layout';
import { PedidoCard } from '../../components/organisms/pedido-card/pedido-card';
import { Modal } from '../../components/organisms/modal/modal';
import { FormField } from '../../components/molecules/form-field/form-field';
import { TabFilter, Tab } from '../../components/molecules/tab-filter/tab-filter';
import { Button } from '../../components/atoms/button/button';
import { PedidoService } from '../../services/pedido.service';
import { MesaService } from '../../services/mesa.service';
import { ClienteService } from '../../services/cliente.service';
import { ProductoService } from '../../services/producto.service';
import { SessionService } from '../../services/session.service';
import { ToastService } from '../../services/toast.service';
import { ClienteResponseDTO, DetallePedidoRequestDTO, MesaResponseDTO, PedidoRequestDTO, PedidoResponseDTO, ProductoResponseDTO } from '../../models/model';

@Component({
  selector: 'app-pedidos',
  imports: [DashboardLayout, PedidoCard, Modal, FormField, TabFilter, Button],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos implements OnInit {
  pedidos = signal<PedidoResponseDTO[]>([]);
  mesas = signal<MesaResponseDTO[]>([]);
  clientes = signal<ClienteResponseDTO[]>([]);
  productos = signal<ProductoResponseDTO[]>([]);
  tabActivo = signal('');
  modalVisible = signal(false);
  detalleVisible = signal(false);
  pedidoDetalle = signal<PedidoResponseDTO | null>(null);

  idMesa = 0;
  idCliente: number | null = null;
  observaciones = '';
  detalles: DetallePedidoRequestDTO[] = [{ idProducto: 0, cantidad: 1 }];

  readonly tabs: Tab[] = [
    { label: 'Todos', value: '' },
    { label: 'Creada', value: 'CREADA' },
    { label: 'En preparación', value: 'EN_PREPARACION' },
    { label: 'Entregada', value: 'ENTREGADA' },
  ];

  constructor(
    private pedidoService: PedidoService,
    private mesaService: MesaService,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private sessionService: SessionService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.cargar();
    this.mesaService.getMesas('DISPONIBLE').subscribe((data) => this.mesas.set(data));
    this.clienteService.getClientes().subscribe((data) => this.clientes.set(data));
    this.productoService.getProductos(undefined, true).subscribe((data) => this.productos.set(data));
  }

  cargar(): void {
    const estado = this.tabActivo() || undefined;
    this.pedidoService.getPedidos(estado).subscribe((data) => this.pedidos.set(data));
  }

  cambiarTab(value: string): void {
    this.tabActivo.set(value);
    this.cargar();
  }

  abrirCrear(): void {
    this.idMesa = 0;
    this.idCliente = null;
    this.observaciones = '';
    this.detalles = [{ idProducto: 0, cantidad: 1 }];
    this.modalVisible.set(true);
  }

  agregarDetalle(): void {
    this.detalles = [...this.detalles, { idProducto: 0, cantidad: 1 }];
  }

  quitarDetalle(i: number): void {
    this.detalles = this.detalles.filter((_, idx) => idx !== i);
  }

  guardar(): void {
    const usuario = this.sessionService.usuario();
    if (!usuario) return;
    if (!this.idMesa) { this.toastService.show('Selecciona una mesa.'); return; }
    const detallesValidos = this.detalles.filter(d => d.idProducto > 0);
    if (detallesValidos.length === 0) { this.toastService.show('Agrega al menos un producto.'); return; }
    const body: PedidoRequestDTO = {
      idMesa: this.idMesa,
      idCliente: this.idCliente,
      idUsuario: usuario.idUsuario,
      observaciones: this.observaciones,
      detalles: detallesValidos,
    };
    this.pedidoService.crearPedido(body).subscribe({
      next: () => { this.modalVisible.set(false); this.cargar(); },
      error: () => this.toastService.show('Error al crear el pedido. Verifica los datos.'),
    });
  }

  avanzar(id: number): void {
    this.pedidoService.avanzarEstado(id).subscribe({
      next: () => this.cargar(),
      error: () => this.toastService.show('No se pudo avanzar el estado del pedido.'),
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este pedido?')) {
      this.pedidoService.eliminarPedido(id).subscribe({
        next: () => this.cargar(),
        error: (e) => this.toastService.show(
          e.status === 409 ? 'Solo se pueden eliminar pedidos en estado Creada.' : 'Error al eliminar el pedido.'
        ),
      });
    }
  }

  verDetalle(pedido: PedidoResponseDTO): void {
    this.pedidoDetalle.set(pedido);
    this.detalleVisible.set(true);
  }

  formatPrice(value: number): string {
    return `$ ${value.toLocaleString('es-CO')}`;
  }
}
