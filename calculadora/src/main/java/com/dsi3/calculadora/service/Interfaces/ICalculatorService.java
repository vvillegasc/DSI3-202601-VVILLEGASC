package com.dsi3.calculadora.service.Interfaces;

import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;

public interface ICalculatorService {

    CalculadoraResponseDTO operacionesBasicas(CalculadoraRequestDTO valores, int operacion);
}
