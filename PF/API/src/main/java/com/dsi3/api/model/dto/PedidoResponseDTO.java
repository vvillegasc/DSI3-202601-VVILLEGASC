package com.dsi3.api.model.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.dsi3.api.model.entity.Pedido.EstadoPedido;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PedidoResponseDTO {

    private Long idPedido;
    private MesaResponseDTO mesa;
    private ClienteResponseDTO cliente;
    private UsuarioResponseDTO usuario;
    private LocalDateTime fechaCreacion;
    private EstadoPedido estado;
    private String observaciones;
    private List<DetallePedidoResponseDTO> detalles;
    private double total;
}
