package com.dsi3.calculadora.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InteresCompuestoRequestDTO {

    private double capitalInicial;
    private double tasaInteres;
    private int periodo;
}
