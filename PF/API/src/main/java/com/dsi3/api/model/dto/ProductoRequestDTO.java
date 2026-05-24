package com.dsi3.api.model.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductoRequestDTO {

    @NotBlank
    private String nombre;

    private String descripcion;

    @NotNull
    @PositiveOrZero
    private Double precio;

    @NotBlank
    private String categoria;

    private String imagenUrl;

    @NotNull
    private Boolean disponible;

    @Min(0)
    private int stock;
}
