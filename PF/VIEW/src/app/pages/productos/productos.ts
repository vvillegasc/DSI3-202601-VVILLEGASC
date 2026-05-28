import { Component, OnInit, signal } from '@angular/core';
import { DashboardLayout } from '../../components/templates/dashboard-layout/dashboard-layout';
import { ProductoCard } from '../../components/organisms/producto-card/producto-card';
import { ProductoForm } from '../../components/organisms/producto-form/producto-form';
import { Modal } from '../../components/organisms/modal/modal';
import { SearchBar } from '../../components/molecules/search-bar/search-bar';
import { TabFilter, Tab } from '../../components/molecules/tab-filter/tab-filter';
import { Button } from '../../components/atoms/button/button';
import { ProductoService } from '../../services/producto.service';
import { ToastService } from '../../services/toast.service';
import { ProductoRequestDTO, ProductoResponseDTO } from '../../models/model';

@Component({
  selector: 'app-productos',
  imports: [DashboardLayout, ProductoCard, ProductoForm, Modal, SearchBar, TabFilter, Button],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productos = signal<ProductoResponseDTO[]>([]);
  busqueda = signal('');
  categoriaActiva = signal('');
  modalVisible = signal(false);
  editando = signal<ProductoResponseDTO | null>(null);

  form: ProductoRequestDTO = { nombre: '', descripcion: '', precio: 0, categoria: '', imagenUrl: '', disponible: true, stock: 0 };

  readonly tabs: Tab[] = [
    { label: 'Todos', value: '' },
    { label: 'Entrada', value: 'Entrada' },
    { label: 'Plato Fuerte', value: 'Plato Fuerte' },
    { label: 'Postre', value: 'Postre' },
    { label: 'Bebida', value: 'Bebida' },
  ];

  constructor(private productoService: ProductoService, private toastService: ToastService) {}

  ngOnInit(): void { this.cargar(); }

  cargar(): void {
    this.productoService.getProductos().subscribe((data) => this.productos.set(data));
  }

  cambiarCategoria(value: string): void {
    this.categoriaActiva.set(value);
    this.busqueda.set('');
  }

  get productosFiltrados(): ProductoResponseDTO[] {
    let lista = this.productos();
    const cat = this.categoriaActiva();
    if (cat) lista = lista.filter(p => p.categoria === cat);
    const q = this.busqueda().toLowerCase();
    if (q) lista = lista.filter(p => p.nombre.toLowerCase().includes(q));
    return lista;
  }

  abrirCrear(): void {
    this.editando.set(null);
    this.form = { nombre: '', descripcion: '', precio: 0, categoria: '', imagenUrl: '', disponible: true, stock: 0 };
    this.modalVisible.set(true);
  }

  abrirEditar(p: ProductoResponseDTO): void {
    this.editando.set(p);
    this.form = { nombre: p.nombre, descripcion: p.descripcion, precio: p.precio, categoria: p.categoria, imagenUrl: p.imagenUrl, disponible: p.disponible, stock: p.stock };
    this.modalVisible.set(true);
  }

  guardar(): void {
    const editing = this.editando();
    if (editing) {
      this.productoService.actualizarProducto(editing.idProducto, this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: () => this.toastService.show('Error al actualizar el producto.'),
      });
    } else {
      this.productoService.crearProducto(this.form).subscribe({
        next: () => { this.modalVisible.set(false); this.cargar(); },
        error: () => this.toastService.show('Error al crear el producto.'),
      });
    }
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe({
        next: () => this.cargar(),
        error: () => this.toastService.show('Error al eliminar el producto.'),
      });
    }
  }
}
