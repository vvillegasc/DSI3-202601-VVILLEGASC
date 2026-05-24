package com.dsi3.api.model.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank
    private String estado;
}
