package com.dsi3.api.controller.implementations;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IPedidoController;
import com.dsi3.api.model.dto.DetallePedidoRequestDTO;
import com.dsi3.api.model.dto.DetallePedidoResponseDTO;
import com.dsi3.api.model.dto.PedidoRequestDTO;
import com.dsi3.api.model.dto.PedidoResponseDTO;
import com.dsi3.api.service.interfaces.IDetallePedidoService;
import com.dsi3.api.service.interfaces.IPedidoService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class PedidoController implements IPedidoController {

    private final IPedidoService pedidoService;
    private final IDetallePedidoService detallePedidoService;

    @Override
    public ResponseEntity<PedidoResponseDTO> crearPedido(PedidoRequestDTO request) {
        return pedidoService.crearPedido(request);
    }

    @Override
    public ResponseEntity<List<PedidoResponseDTO>> obtenerPedidos(String estado) {
        return pedidoService.obtenerPedidos(estado);
    }

    @Override
    public ResponseEntity<PedidoResponseDTO> obtenerPedidoPorId(Long id) {
        return pedidoService.obtenerPedidoPorId(id);
    }

    @Override
    public ResponseEntity<Void> eliminarPedido(Long id) {
        return pedidoService.eliminarPedido(id);
    }

    @Override
    public ResponseEntity<PedidoResponseDTO> avanzarEstadoPedido(Long id) {
        return pedidoService.avanzarEstado(id);
    }

    @Override
    public ResponseEntity<DetallePedidoResponseDTO> agregarDetalle(Long id, DetallePedidoRequestDTO detalle) {
        return detallePedidoService.agregarDetalle(id, detalle);
    }

    @Override
    public ResponseEntity<Void> eliminarDetalle(Long id, Long detalleId) {
        return detallePedidoService.eliminarDetalle(id, detalleId);
    }
}
