package com.dsi3.api.mapper;

import org.springframework.stereotype.Component;

import com.dsi3.api.model.dto.ProductoRequestDTO;
import com.dsi3.api.model.dto.ProductoResponseDTO;
import com.dsi3.api.model.entity.Producto;

@Component
public class ProductoMapper {

    public Producto toEntity(ProductoRequestDTO dto) {
        return Producto.builder()
                .nombre(dto.getNombre())
                .descripcion(dto.getDescripcion())
                .precio(dto.getPrecio())
                .categoria(dto.getCategoria())
                .imagenUrl(dto.getImagenUrl())
                .disponible(dto.getDisponible())
                .stock(dto.getStock())
                .build();
    }

    public ProductoResponseDTO toResponse(Producto entity) {
        return ProductoResponseDTO.builder()
                .idProducto(entity.getIdProducto())
                .nombre(entity.getNombre())
                .descripcion(entity.getDescripcion())
                .precio(entity.getPrecio())
                .categoria(entity.getCategoria())
                .imagenUrl(entity.getImagenUrl())
                .disponible(entity.isDisponible())
                .stock(entity.getStock())
                .build();
    }
}
