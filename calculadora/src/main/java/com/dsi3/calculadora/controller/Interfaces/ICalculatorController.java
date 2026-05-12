package com.dsi3.calculadora.controller.Interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;

@RequestMapping("/api/calculadora")
public interface ICalculatorController{

@PostMapping("/suma")
ResponseEntity<CalculadoraResponseDTO> suma(@RequestBody CalculadoraRequestDTO request);

@PostMapping("/resta")
ResponseEntity<CalculadoraResponseDTO> resta(@RequestBody CalculadoraRequestDTO request);

@PostMapping("/multiplicacion")
ResponseEntity<CalculadoraResponseDTO> multiplicacion(@RequestBody CalculadoraRequestDTO request);

@PostMapping("/division")
ResponseEntity<CalculadoraResponseDTO> division(@RequestBody CalculadoraRequestDTO request);

}
