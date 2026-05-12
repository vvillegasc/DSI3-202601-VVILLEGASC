package com.dsi3.calculadora.service.Implementations;

import org.springframework.stereotype.Service;

import com.dsi3.calculadora.model.dto.CalculadoraRequestDTO;
import com.dsi3.calculadora.model.dto.CalculadoraResponseDTO;
import com.dsi3.calculadora.service.Interfaces.ICalculatorService;

@Service
public class CalculatorService implements ICalculatorService {

    @Override
    public CalculadoraResponseDTO operacionesBasicas(CalculadoraRequestDTO valores, int operacion) {
        CalculadoraResponseDTO response = new CalculadoraResponseDTO();

        switch (operacion) {
            case 1:
                response.setResult(valores.getInputA() + valores.getInputB());
                break;
            case 2:
                response.setResult(valores.getInputA() - valores.getInputB());
                break;
            case 3:
                response.setResult(valores.getInputA() * valores.getInputB());
                break;
            case 4:
                response.setResult(valores.getInputB() == 0 ? 0.0 : valores.getInputA() / valores.getInputB());
                break;
            default:
                break;
        }
        return response;
    }
}
