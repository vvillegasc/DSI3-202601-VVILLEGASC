package com.dsi3.api.service.implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsi3.api.mapper.PedidoMapper;
import com.dsi3.api.model.dto.PedidoRequestDTO;
import com.dsi3.api.model.dto.PedidoResponseDTO;
import com.dsi3.api.model.entity.Cliente;
import com.dsi3.api.model.entity.DetallePedido;
import com.dsi3.api.model.entity.Mesa;
import com.dsi3.api.model.entity.Mesa.EstadoMesa;
import com.dsi3.api.model.entity.Pedido;
import com.dsi3.api.model.entity.Pedido.EstadoPedido;
import com.dsi3.api.model.entity.Producto;
import com.dsi3.api.model.entity.Usuario;
import com.dsi3.api.repository.IClienteRepository;
import com.dsi3.api.repository.IMesaRepository;
import com.dsi3.api.repository.IPedidoRepository;
import com.dsi3.api.repository.IProductoRepository;
import com.dsi3.api.repository.IUsuarioRepository;
import com.dsi3.api.service.interfaces.IPedidoService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PedidoService implements IPedidoService {

    private final IPedidoRepository pedidoRepository;
    private final IMesaRepository mesaRepository;
    private final IClienteRepository clienteRepository;
    private final IUsuarioRepository usuarioRepository;
    private final IProductoRepository productoRepository;
    private final PedidoMapper pedidoMapper;

    @Override
    @Transactional
    public ResponseEntity<PedidoResponseDTO> crearPedido(PedidoRequestDTO request) {
        Optional<Mesa> mesa = mesaRepository.findById(request.getIdMesa());
        if (mesa.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Optional<Usuario> usuario = usuarioRepository.findById(request.getIdUsuario());
        if (usuario.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }

        Optional<Cliente> clienteOpt = clienteRepository.findById(request.getIdCliente());
        if (clienteOpt.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }

        Pedido pedido = Pedido.builder()
                .mesa(mesa.get())
                .cliente(clienteOpt.get())
                .usuario(usuario.get())
                .estado(EstadoPedido.CREADA)
                .observaciones(request.getObservaciones())
                .build();

        for (var detalleReq : request.getDetalles()) {
            Optional<Producto> producto = productoRepository.findById(detalleReq.getIdProducto());
            if (producto.isEmpty()) {
                return ResponseEntity.status(404).body(null);
            }
            double precioUnitario = producto.get().getPrecio();
            DetallePedido detalle = DetallePedido.builder()
                    .pedido(pedido)
                    .producto(producto.get())
                    .cantidad(detalleReq.getCantidad())
                    .precioUnitario(precioUnitario)
                    .subtotal(precioUnitario * detalleReq.getCantidad())
                    .build();
            pedido.getDetalles().add(detalle);
        }

        mesa.get().setEstado(EstadoMesa.OCUPADA);
        mesaRepository.save(mesa.get());

        Pedido guardado = pedidoRepository.save(pedido);
        return ResponseEntity.status(201).body(pedidoMapper.toResponse(guardado));
    }

    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<List<PedidoResponseDTO>> obtenerPedidos(String estado) {
        List<Pedido> pedidos;
        if (estado != null && !estado.isBlank()) {
            pedidos = pedidoRepository.findByEstado(EstadoPedido.valueOf(estado.toUpperCase()));
        } else {
            pedidos = pedidoRepository.findAll();
        }
        List<PedidoResponseDTO> response = pedidos.stream()
                .map(pedidoMapper::toResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @Override
    @Transactional(readOnly = true)
    public ResponseEntity<PedidoResponseDTO> obtenerPedidoPorId(Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(pedidoMapper.toResponse(pedido.get()));
    }

    @Override
    public ResponseEntity<Void> eliminarPedido(Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        if (pedido.get().getEstado() != EstadoPedido.CREADA) {
            return ResponseEntity.status(409).build();
        }
        pedidoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    @Transactional
    public ResponseEntity<PedidoResponseDTO> avanzarEstado(Long id) {
        Optional<Pedido> pedidoOpt = pedidoRepository.findById(id);
        if (pedidoOpt.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Pedido pedido = pedidoOpt.get();
        switch (pedido.getEstado()) {
            case CREADA -> pedido.setEstado(EstadoPedido.EN_PREPARACION);
            case EN_PREPARACION -> {
                pedido.setEstado(EstadoPedido.ENTREGADA);
                pedido.getMesa().setEstado(EstadoMesa.DISPONIBLE);
                mesaRepository.save(pedido.getMesa());
            }
            default -> {
                return ResponseEntity.status(409).body(null);
            }
        }
        Pedido actualizado = pedidoRepository.save(pedido);
        return ResponseEntity.ok(pedidoMapper.toResponse(actualizado));
    }
}
