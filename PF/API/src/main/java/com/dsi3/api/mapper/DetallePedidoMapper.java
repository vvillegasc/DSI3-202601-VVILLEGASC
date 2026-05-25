package com.dsi3.api.mapper;

import org.springframework.stereotype.Component;

import com.dsi3.api.model.dto.DetallePedidoResponseDTO;
import com.dsi3.api.model.entity.DetallePedido;

@Component
public class DetallePedidoMapper {

    public DetallePedidoResponseDTO toResponse(DetallePedido entity) {
        return DetallePedidoResponseDTO.builder()
                .idDetalle(entity.getIdDetalle())
                .idProducto(entity.getProducto().getIdProducto())
                .nombreProducto(entity.getProducto().getNombre())
                .cantidad(entity.getCantidad())
                .precioUnitario(entity.getPrecioUnitario())
                .subtotal(entity.getSubtotal())
                .build();
    }
}
