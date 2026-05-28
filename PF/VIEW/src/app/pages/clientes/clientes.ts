import { Component, OnInit, signal } from '@angular/core';
import { DashboardLayout } from '../../components/templates/dashboard-layout/dashboard-layout';
import { ClienteCard } from '../../components/organisms/cliente-card/cliente-card';
import { Modal } from '../../components/organisms/modal/modal';
import { FormField } from '../../components/molecules/form-field/form-field';
import { SearchBar } from '../../components/molecules/search-bar/search-bar';
import { Button } from '../../components/atoms/button/button';
import { ClienteService } from '../../services/cliente.service';
import { ToastService } from '../../services/toast.service';
import { ClienteRequestDTO, ClienteResponseDTO } from '../../models/model';

@Component({
  selector: 'app-clientes',
  imports: [DashboardLayout, ClienteCard, Modal, FormField, SearchBar, Button],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  clientes = signal<ClienteResponseDTO[]>([]);
  busqueda = signal('');
  modalVisible = signal(false);
  editando = signal<ClienteResponseDTO | null>(null);

  form: ClienteRequestDTO = { nombre: '', telefono: '', email: '' };

  constructor(private clienteService: ClienteService, private toastService: ToastService) {}

  ngOnInit(): void { this.cargar(); }

  cargar(busqueda?: string): void {
    this.clienteService.getClientes(busqueda).subscribe((data) => this.clientes.set(data));
  }

  onBusqueda(value: string): void {
    this.busqueda.set(value);
    this.cargar(value || undefined);
  }

  abrirCrear(): void {
    this.editando.set(null);
    this.form = { nombre: '', telefono: '', email: '' };
    this.modalVisible.set(true);
  }

  abrirEditar(c: ClienteResponseDTO): void {
    this.editando.set(c);
    this.form = { nombre: c.nombre, telefono: c.telefono, email: c.email };
    this.modalVisible.set(true);
  }

  guardar(): void {
    const editing = this.editando();
    if (editing) {
      this.clienteService.actualizarCliente(editing.idCliente, this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: (e) => this.toastService.show(
          e.status === 409 ? 'Ya existe un cliente con ese teléfono.' : 'Error al actualizar el cliente.'
        ),
      });
    } else {
      this.clienteService.crearCliente(this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: (e) => this.toastService.show(
          e.status === 409 ? 'Ya existe un cliente con ese teléfono.' : 'Error al crear el cliente.'
        ),
      });
    }
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => this.cargar(),
        error: () => this.toastService.show('Error al eliminar el cliente.'),
      });
    }
  }
}
