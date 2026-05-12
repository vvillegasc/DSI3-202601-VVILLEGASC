package com.dsi3.calculadora.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DivisasResponseDTO {

    private double conversionRate;
    private double conversionValue;
    private String mensaje;
}
