package com.dsi3.calculadora.service.Implementations;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.calculadora.model.dto.DivisasRequestDTO;
import com.dsi3.calculadora.model.dto.DivisasResponseDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoRequestDTO;
import com.dsi3.calculadora.model.dto.InteresCompuestoResponseDTO;
import com.dsi3.calculadora.service.Interfaces.IDivisasService;

@Service
public class DivisasService implements IDivisasService{

    private final Map<String,Double> exchange = Map.of(
        "USD", 3720.92,
        "EUR", 4365.60,
        "GBP", 5120.80
    );
    @Override
    public ResponseEntity<DivisasResponseDTO> calcularDivisa(DivisasRequestDTO value){

        DivisasResponseDTO response = new DivisasResponseDTO();
        String divisaIngresada = value.getDivisa().toUpperCase();
        double valorIngresado = value.getValor();

        if (exchange.containsKey(divisaIngresada)) {
            response.setMensaje("Cambio realizado exitosamente");
            response.setConversionRate(exchange.get(divisaIngresada));
            response.setConversionValue(exchange.get(divisaIngresada) * valorIngresado);
            return ResponseEntity.ok(response);
        } else {
            response.setMensaje("El cambio no pudo ser realizado");

            return ResponseEntity.status(400).body(response);
        }    }


    @Override
    public ResponseEntity<InteresCompuestoResponseDTO> calcularInteresCompuesto(InteresCompuestoRequestDTO request) {
     InteresCompuestoResponseDTO response = new InteresCompuestoResponseDTO();

        double capitalInicial= request.getCapitalInicial();
        int periodo = request.getPeriodo();
        double tasaInteres = Math.pow((1+request.getTasaInteres()),(double)1.0/12)-1;


        double capitalFinalResponse = capitalInicial * Math.pow(1+tasaInteres,periodo);
        response.setCapitalFinal(capitalFinalResponse);

        return ResponseEntity.ok(response);    
    } 
}



