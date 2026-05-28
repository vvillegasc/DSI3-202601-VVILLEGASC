export interface UsuarioResponseDTO {
  idUsuario: number;
  nombre: string;
  email: string;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface RegistroRequestDTO {
  nombre: string;
  email: string;
  password: string;
}

export interface MesaResponseDTO {
  idMesa: number;
  numero: number;
  capacidad: number;
  estado: string;
}

export interface MesaRequestDTO {
  numero: number;
  capacidad: number;
  estado: string;
}

export interface ClienteResponseDTO {
  idCliente: number;
  nombre: string;
  telefono: string;
  email: string;
  fechaRegistro: string;
}

export interface ClienteRequestDTO {
  nombre: string;
  telefono: string;
  email: string;
}

export interface ProductoResponseDTO {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagenUrl: string;
  disponible: boolean;
  stock: number;
}

export interface ProductoRequestDTO {
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagenUrl: string;
  disponible: boolean;
  stock: number;
}

export interface DetallePedidoResponseDTO {
  idDetalle: number;
  idProducto: number;
  nombreProducto: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

export interface DetallePedidoRequestDTO {
  idProducto: number;
  cantidad: number;
}

export interface PedidoResponseDTO {
  idPedido: number;
  mesa: MesaResponseDTO;
  cliente: ClienteResponseDTO | null;
  usuario: UsuarioResponseDTO;
  fechaCreacion: string;
  estado: string;
  observaciones: string;
  detalles: DetallePedidoResponseDTO[];
  total: number;
}

export interface PedidoRequestDTO {
  idMesa: number;
  idCliente: number | null;
  idUsuario: number;
  observaciones: string;
  detalles: DetallePedidoRequestDTO[];
}

export interface DashboardResumenDTO {
  productosActivos: number;
  mesasDisponibles: number;
  pedidosActivos: number;
  pedidosEntregadosHoy: number;
}
