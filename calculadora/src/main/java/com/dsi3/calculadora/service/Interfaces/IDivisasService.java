package com.dsi3.calculadora.service.Interfaces;

import org.springframework.http.ResponseEntity;

import com.dsi3.calculadora.model.dto.DivisasRequestDTO;
import com.dsi3.calculadora.model.dto.DivisasResponseDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoRequestDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoResponseDTO;

public interface IDivisasService {

    public ResponseEntity<DivisasResponseDTO> calcularDivisa(DivisasRequestDTO value);
    public ResponseEntity<InteresCompuestoResponseDTO> calcularInteresCompuesto(InteresCompuestoRequestDTO value);

}
