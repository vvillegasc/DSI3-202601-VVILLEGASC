package com.dsi3.api.model.dto;

import com.dsi3.api.model.entity.Mesa.EstadoMesa;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MesaRequestDTO {

    @NotNull
    @Min(1)
    private Integer numero;

    @NotNull
    @Min(1)
    private Integer capacidad;

    @NotNull
    private EstadoMesa estado;
}
