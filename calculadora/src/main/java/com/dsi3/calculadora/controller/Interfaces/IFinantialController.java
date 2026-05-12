package com.dsi3.calculadora.controller.Interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dsi3.calculadora.model.dto.DivisasRequestDTO;
import com.dsi3.calculadora.model.dto.DivisasResponseDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoRequestDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoResponseDTO;

@RequestMapping("/api/calculadora/financiera")
public interface IFinantialController {

    @PostMapping("/divisas")
    ResponseEntity<DivisasResponseDTO> calcularDivisas(@RequestBody DivisasRequestDTO request);

    @PostMapping("/interes")
    ResponseEntity<InteresCompuestoResponseDTO> calcularInteresCompuesto(@RequestBody InteresCompuestoRequestDTO request);

}
