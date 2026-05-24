package com.dsi3.api.controller.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dsi3.api.model.dto.DetallePedidoRequestDTO;
import com.dsi3.api.model.dto.DetallePedidoResponseDTO;
import com.dsi3.api.model.dto.PedidoRequestDTO;
import com.dsi3.api.model.dto.PedidoResponseDTO;

import jakarta.validation.Valid;

@RequestMapping("/api/pedidos")
public interface IPedidoController {

    @PostMapping
    ResponseEntity<PedidoResponseDTO> crearPedido(@RequestBody @Valid PedidoRequestDTO request);

    @GetMapping
    ResponseEntity<List<PedidoResponseDTO>> obtenerPedidos(@RequestParam(required = false) String estado);

    @GetMapping("/{id}")
    ResponseEntity<PedidoResponseDTO> obtenerPedidoPorId(@PathVariable Long id);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> eliminarPedido(@PathVariable Long id);

    @PatchMapping("/{id}/estado")
    ResponseEntity<PedidoResponseDTO> avanzarEstadoPedido(@PathVariable Long id);

    @PostMapping("/{id}/detalles")
    ResponseEntity<DetallePedidoResponseDTO> agregarDetalle(@PathVariable Long id, @RequestBody @Valid DetallePedidoRequestDTO detalle);

    @DeleteMapping("/{id}/detalles/{detalleId}")
    ResponseEntity<Void> eliminarDetalle(@PathVariable Long id, @PathVariable Long detalleId);
}
