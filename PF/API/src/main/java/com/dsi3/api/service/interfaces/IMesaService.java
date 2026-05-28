package com.dsi3.api.service.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.MesaRequestDTO;
import com.dsi3.api.model.dto.MesaResponseDTO;

public interface IMesaService {

    ResponseEntity<MesaResponseDTO> crearMesa(MesaRequestDTO request);
    ResponseEntity<List<MesaResponseDTO>> obtenerMesas(String estado);
    ResponseEntity<MesaResponseDTO> obtenerMesaPorId(Long id);
    ResponseEntity<MesaResponseDTO> actualizarMesa(Long id, MesaRequestDTO request);
    ResponseEntity<Void> eliminarMesa(Long id);
}
