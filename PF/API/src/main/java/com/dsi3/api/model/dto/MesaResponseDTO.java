package com.dsi3.api.model.dto;

import com.dsi3.api.model.entity.Mesa.EstadoMesa;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MesaResponseDTO {

    private Long idMesa;
    private int numero;
    private int capacidad;
    private EstadoMesa estado;
}
