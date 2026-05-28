package com.dsi3.api.controller.implementations;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IMesaController;
import com.dsi3.api.model.dto.MesaRequestDTO;
import com.dsi3.api.model.dto.MesaResponseDTO;
import com.dsi3.api.service.interfaces.IMesaService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class MesaController implements IMesaController {

    private final IMesaService mesaService;

    @Override
    public ResponseEntity<MesaResponseDTO> crearMesa(MesaRequestDTO request) {
        return mesaService.crearMesa(request);
    }

    @Override
    public ResponseEntity<List<MesaResponseDTO>> obtenerMesas(String estado) {
        return mesaService.obtenerMesas(estado);
    }

    @Override
    public ResponseEntity<MesaResponseDTO> obtenerMesaPorId(Long id) {
        return mesaService.obtenerMesaPorId(id);
    }

    @Override
    public ResponseEntity<MesaResponseDTO> actualizarMesa(Long id, MesaRequestDTO request) {
        return mesaService.actualizarMesa(id, request);
    }

    @Override
    public ResponseEntity<Void> eliminarMesa(Long id) {
        return mesaService.eliminarMesa(id);
    }
}
