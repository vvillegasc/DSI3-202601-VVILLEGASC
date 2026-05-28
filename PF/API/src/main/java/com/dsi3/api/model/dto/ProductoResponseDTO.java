package com.dsi3.api.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductoResponseDTO {

    private Long idProducto;
    private String nombre;
    private String descripcion;
    private double precio;
    private String categoria;
    private String imagenUrl;
    private boolean disponible;
    private int stock;
}
