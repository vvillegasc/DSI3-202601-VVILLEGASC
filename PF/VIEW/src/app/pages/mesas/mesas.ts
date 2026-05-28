import { Component, OnInit, signal } from '@angular/core';
import { DashboardLayout } from '../../components/templates/dashboard-layout/dashboard-layout';
import { MesaCard } from '../../components/organisms/mesa-card/mesa-card';
import { Modal } from '../../components/organisms/modal/modal';
import { FormField } from '../../components/molecules/form-field/form-field';
import { TabFilter, Tab } from '../../components/molecules/tab-filter/tab-filter';
import { Button } from '../../components/atoms/button/button';
import { MesaService } from '../../services/mesa.service';
import { ToastService } from '../../services/toast.service';
import { MesaRequestDTO, MesaResponseDTO } from '../../models/model';

@Component({
  selector: 'app-mesas',
  imports: [DashboardLayout, MesaCard, Modal, FormField, TabFilter, Button],
  templateUrl: './mesas.html',
  styleUrl: './mesas.css',
})
export class Mesas implements OnInit {
  mesas = signal<MesaResponseDTO[]>([]);
  tabActivo = signal('');
  modalVisible = signal(false);
  editando = signal<MesaResponseDTO | null>(null);

  form: MesaRequestDTO = { numero: 1, capacidad: 2, estado: 'DISPONIBLE' };

  readonly tabs: Tab[] = [
    { label: 'Todas', value: '' },
    { label: 'Disponibles', value: 'DISPONIBLE' },
    { label: 'Ocupadas', value: 'OCUPADA' },
  ];

  constructor(private mesaService: MesaService, private toastService: ToastService) {}

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    const estado = this.tabActivo() || undefined;
    this.mesaService.getMesas(estado).subscribe((data) => this.mesas.set(data));
  }

  cambiarTab(value: string): void {
    this.tabActivo.set(value);
    this.cargar();
  }

  abrirCrear(): void {
    this.editando.set(null);
    this.form = { numero: 1, capacidad: 2, estado: 'DISPONIBLE' };
    this.modalVisible.set(true);
  }

  abrirEditar(m: MesaResponseDTO): void {
    this.editando.set(m);
    this.form = { numero: m.numero, capacidad: m.capacidad, estado: m.estado };
    this.modalVisible.set(true);
  }

  guardar(): void {
    const editing = this.editando();
    if (editing) {
      this.mesaService.actualizarMesa(editing.idMesa, this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: (e) => this.toastService.show(
          e.status === 409 ? 'Ya existe una mesa con ese número.' : 'Error al actualizar la mesa.'
        ),
      });
    } else {
      this.mesaService.crearMesa(this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: (e) => this.toastService.show(
          e.status === 409 ? 'Ya existe una mesa con ese número.' : 'Error al crear la mesa.'
        ),
      });
    }
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar esta mesa?')) {
      this.mesaService.eliminarMesa(id).subscribe({
        next: () => this.cargar(),
        error: (e) => this.toastService.show(
          e.status === 409 ? 'No se puede eliminar: la mesa tiene pedidos activos.' : 'Error al eliminar la mesa.'
        ),
      });
    }
  }
}
