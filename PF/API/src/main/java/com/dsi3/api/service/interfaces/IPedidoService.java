package com.dsi3.api.service.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.PedidoRequestDTO;
import com.dsi3.api.model.dto.PedidoResponseDTO;

public interface IPedidoService {

    ResponseEntity<PedidoResponseDTO> crearPedido(PedidoRequestDTO request);
    ResponseEntity<List<PedidoResponseDTO>> obtenerPedidos(String estado);
    ResponseEntity<PedidoResponseDTO> obtenerPedidoPorId(Long id);
    ResponseEntity<Void> eliminarPedido(Long id);
    ResponseEntity<PedidoResponseDTO> avanzarEstado(Long id);
}
