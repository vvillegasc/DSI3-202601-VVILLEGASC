package com.dsi3.api.model.dto;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PedidoRequestDTO {

    @NotNull
    private Long idMesa;

    private Long idCliente;

    @NotNull
    private Long idUsuario;

    private String observaciones;

    @NotEmpty
    @Valid
    private List<DetallePedidoRequestDTO> detalles;
}
