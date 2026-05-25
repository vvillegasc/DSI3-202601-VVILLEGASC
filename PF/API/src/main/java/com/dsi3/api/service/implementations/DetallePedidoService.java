package com.dsi3.api.service.implementations;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.mapper.DetallePedidoMapper;
import com.dsi3.api.model.dto.DetallePedidoRequestDTO;
import com.dsi3.api.model.dto.DetallePedidoResponseDTO;
import com.dsi3.api.model.entity.DetallePedido;
import com.dsi3.api.model.entity.Pedido;
import com.dsi3.api.model.entity.Producto;
import com.dsi3.api.repository.IDetallePedidoRepository;
import com.dsi3.api.repository.IPedidoRepository;
import com.dsi3.api.repository.IProductoRepository;
import com.dsi3.api.service.interfaces.IDetallePedidoService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DetallePedidoService implements IDetallePedidoService {

    private final IPedidoRepository pedidoRepository;
    private final IProductoRepository productoRepository;
    private final IDetallePedidoRepository detallePedidoRepository;
    private final DetallePedidoMapper detallePedidoMapper;

    @Override
    public ResponseEntity<DetallePedidoResponseDTO> agregarDetalle(Long idPedido, DetallePedidoRequestDTO request) {
        Optional<Pedido> pedidoOpt = pedidoRepository.findById(idPedido);
        if (pedidoOpt.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Optional<Producto> productoOpt = productoRepository.findById(request.getIdProducto());
        if (productoOpt.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }

        Pedido pedido = pedidoOpt.get();
        Producto producto = productoOpt.get();
        double precioUnitario = producto.getPrecio();

        DetallePedido detalle = DetallePedido.builder()
                .pedido(pedido)
                .producto(producto)
                .cantidad(request.getCantidad())
                .precioUnitario(precioUnitario)
                .subtotal(precioUnitario * request.getCantidad())
                .build();

        DetallePedido guardado = detallePedidoRepository.save(detalle);
        return ResponseEntity.status(201).body(detallePedidoMapper.toResponse(guardado));
    }

    @Override
    public ResponseEntity<Void> eliminarDetalle(Long idPedido, Long idDetalle) {
        Optional<Pedido> pedidoOpt = pedidoRepository.findById(idPedido);
        if (pedidoOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        if (!pedidoOpt.get().getEstado().equals("CREADA")) {
            return ResponseEntity.status(409).build();
        }
        if (!detallePedidoRepository.existsById(idDetalle)) {
            return ResponseEntity.status(404).build();
        }
        detallePedidoRepository.deleteById(idDetalle);
        return ResponseEntity.noContent().build();
    }
}
