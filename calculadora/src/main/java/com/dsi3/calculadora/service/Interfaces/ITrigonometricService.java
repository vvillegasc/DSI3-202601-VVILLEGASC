package com.dsi3.calculadora.service.Interfaces;

import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;

public interface ITrigonometricService {

    CalculadoraResponseDTO seno(CalculadoraRequestDTO request);

    CalculadoraResponseDTO coseno(CalculadoraRequestDTO request);

    CalculadoraResponseDTO tangente(CalculadoraRequestDTO request);

    CalculadoraResponseDTO cotangente(CalculadoraRequestDTO request);

    CalculadoraResponseDTO secante(CalculadoraRequestDTO request);

    CalculadoraResponseDTO cosecante(CalculadoraRequestDTO request);
}
