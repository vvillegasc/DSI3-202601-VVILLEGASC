package com.dsi3.api.mapper;

import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.dsi3.api.model.dto.PedidoResponseDTO;
import com.dsi3.api.model.entity.Pedido;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class PedidoMapper {

    private final MesaMapper mesaMapper;
    private final ClienteMapper clienteMapper;
    private final UsuarioMapper usuarioMapper;
    private final DetallePedidoMapper detallePedidoMapper;

    public PedidoResponseDTO toResponse(Pedido entity) {
        double total = entity.getDetalles().stream()
                .mapToDouble(d -> d.getSubtotal())
                .sum();

        return PedidoResponseDTO.builder()
                .idPedido(entity.getIdPedido())
                .mesa(mesaMapper.toResponse(entity.getMesa()))
                .cliente(entity.getCliente() != null ? clienteMapper.toResponse(entity.getCliente()) : null)
                .usuario(usuarioMapper.toResponse(entity.getUsuario()))
                .fechaCreacion(entity.getFechaCreacion())
                .estado(entity.getEstado())
                .observaciones(entity.getObservaciones())
                .detalles(entity.getDetalles().stream()
                        .map(detallePedidoMapper::toResponse)
                        .collect(Collectors.toList()))
                .total(total)
                .build();
    }
}
