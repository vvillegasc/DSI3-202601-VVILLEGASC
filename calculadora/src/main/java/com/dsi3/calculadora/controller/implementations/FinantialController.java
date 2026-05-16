package com.dsi3.calculadora.controller.implementations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.calculadora.controller.Interfaces.IFinantialController;
import com.dsi3.calculadora.model.dto.DivisasRequestDTO;
import com.dsi3.calculadora.model.dto.DivisasResponseDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoRequestDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoResponseDTO;
import com.dsi3.calculadora.service.Interfaces.IDivisasService;

@RestController
public class FinantialController implements IFinantialController {

    private final IDivisasService divisasService;

    public FinantialController(IDivisasService divisasService) {
        this.divisasService = divisasService;
    }

    @Override
    public ResponseEntity<DivisasResponseDTO> calcularDivisas(DivisasRequestDTO request) {
        return divisasService.calcularDivisa(request);
    }


    @Override
    public ResponseEntity<InteresCompuestoResponseDTO> calcularInteresCompuesto(InteresCompuestoRequestDTO request) {
        return divisasService.calcularInteresCompuesto(request);
    }
    
}
