package com.dsi3.api.model.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteResponseDTO {

    private Long idCliente;
    private String nombre;
    private String telefono;
    private String email;
    private LocalDateTime fechaRegistro;
}
