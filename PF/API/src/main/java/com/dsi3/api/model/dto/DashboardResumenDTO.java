package com.dsi3.api.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResumenDTO {

    private long productosActivos;
    private long mesasDisponibles;
    private long pedidosActivos;
    private long pedidosEntregadosHoy;
}
