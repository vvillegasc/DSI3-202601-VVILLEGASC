package com.dsi3.calculadora.controller.implementations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.calculadora.controller.Interfaces.ICalculatorController;
import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;
import com.dsi3.calculadora.service.Interfaces.ICalculatorService;
import com.dsi3.calculadora.service.Interfaces.ITrigonometricService;

@RestController
public class CalculatorController implements ICalculatorController {

    private final ICalculatorService calculatorService;
    private final ITrigonometricService trigonometricService;

    public CalculatorController(ICalculatorService calculatorService, ITrigonometricService trigonometricService) {
        this.calculatorService = calculatorService;
        this.trigonometricService = trigonometricService;
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

    @Override
    public ResponseEntity<CalculadoraResponseDTO> seno(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.seno(request));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> coseno(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.coseno(request));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> tangente(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.tangente(request));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> cotangente(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.cotangente(request));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> secante(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.secante(request));
    }

    @Override
    public ResponseEntity<CalculadoraResponseDTO> cosecante(CalculadoraRequestDTO request) {
        return ResponseEntity.ok(trigonometricService.cosecante(request));
    }
}
