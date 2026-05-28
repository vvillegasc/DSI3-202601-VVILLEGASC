package com.dsi3.api.service.interfaces;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.DetallePedidoRequestDTO;
import com.dsi3.api.model.dto.DetallePedidoResponseDTO;

public interface IDetallePedidoService {

    ResponseEntity<DetallePedidoResponseDTO> agregarDetalle(Long idPedido, DetallePedidoRequestDTO request);
    ResponseEntity<Void> eliminarDetalle(Long idPedido, Long idDetalle);
}
