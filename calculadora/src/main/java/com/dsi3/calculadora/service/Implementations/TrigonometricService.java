package com.dsi3.calculadora.service.Implementations;

import org.springframework.stereotype.Service;

import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;
import com.dsi3.calculadora.service.Interfaces.ITrigonometricService;

@Service
public class TrigonometricService implements ITrigonometricService {

    private static final int TERMINOS = 7;

    @Override
    public CalculadoraResponseDTO seno(CalculadoraRequestDTO request) {
        double resultado = calcularSeno(Math.toRadians(request.getInputA()));
        return buildResponse(resultado);
    }

    @Override
    public CalculadoraResponseDTO coseno(CalculadoraRequestDTO request) {
        double resultado = calcularCoseno(Math.toRadians(request.getInputA()));
        return buildResponse(resultado);
    }

    @Override
    public CalculadoraResponseDTO tangente(CalculadoraRequestDTO request) {
        double radianes = Math.toRadians(request.getInputA());
        double cos = calcularCoseno(radianes);
        double resultado = cos == 0 ? 0.0 : calcularSeno(radianes) / cos;
        return buildResponse(resultado);
    }

    @Override
    public CalculadoraResponseDTO cotangente(CalculadoraRequestDTO request) {
        double radianes = Math.toRadians(request.getInputA());
        double sen = calcularSeno(radianes);
        double resultado = sen == 0 ? 0.0 : calcularCoseno(radianes) / sen;
        return buildResponse(resultado);
    }

    @Override
    public CalculadoraResponseDTO secante(CalculadoraRequestDTO request) {
        double cos = calcularCoseno(Math.toRadians(request.getInputA()));
        double resultado = cos == 0 ? 0.0 : 1.0 / cos;
        return buildResponse(resultado);
    }

    @Override
    public CalculadoraResponseDTO cosecante(CalculadoraRequestDTO request) {
        double sen = calcularSeno(Math.toRadians(request.getInputA()));
        double resultado = sen == 0 ? 0.0 : 1.0 / sen;
        return buildResponse(resultado);
    }

    private double calcularSeno(double radianes) {
        double resultado = 0;
        for (int n = 0; n < TERMINOS; n++) {
            resultado += Math.pow(-1, n) * Math.pow(radianes, 2 * n + 1) / factorial(2 * n + 1);
        }
        return resultado;
    }

    private double calcularCoseno(double radianes) {
        double resultado = 0;
        for (int n = 0; n < TERMINOS; n++) {
            resultado += Math.pow(-1, n) * Math.pow(radianes, 2 * n) / factorial(2 * n);
        }
        return resultado;
    }

    private CalculadoraResponseDTO buildResponse(double resultado) {
        CalculadoraResponseDTO response = new CalculadoraResponseDTO();
        response.setResult(Math.round(resultado * 100.0) / 100.0);
        return response;
    }

    private double factorial(int n) {
        double resultado = 1;
        for (int i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
