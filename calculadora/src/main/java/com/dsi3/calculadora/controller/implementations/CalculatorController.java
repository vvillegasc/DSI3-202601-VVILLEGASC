package com.dsi3.calculadora.controller.implementations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.calculadora.controller.Interfaces.ICalculatorController;
import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;
import com.dsi3.calculadora.service.Interfaces.ICalculatorService;

@RestController
public class CalculatorController implements ICalculatorController {

    private final ICalculatorService calculatorService;

    public CalculatorController(ICalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> suma(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(calculatorService.operacionesBasicas(request, 1));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> resta(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(calculatorService.operacionesBasicas(request, 2));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> multiplicacion(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(calculatorService.operacionesBasicas(request, 3));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> division(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(calculatorService.operacionesBasicas(request, 4));
    }
}
