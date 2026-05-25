package com.dsi3.api.service.implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.mapper.MesaMapper;
import com.dsi3.api.model.dto.MesaRequestDTO;
import com.dsi3.api.model.dto.MesaResponseDTO;
import com.dsi3.api.model.entity.Mesa;
import com.dsi3.api.repository.IMesaRepository;
import com.dsi3.api.service.interfaces.IMesaService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MesaService implements IMesaService {

    private final IMesaRepository mesaRepository;
    private final MesaMapper mesaMapper;

    @Override
    public ResponseEntity<MesaResponseDTO> crearMesa(MesaRequestDTO request) {
        Mesa mesa = mesaMapper.toEntity(request);
        Mesa guardada = mesaRepository.save(mesa);
        return ResponseEntity.status(201).body(mesaMapper.toResponse(guardada));
    }

    @Override
    public ResponseEntity<List<MesaResponseDTO>> obtenerMesas(String estado) {
        List<Mesa> mesas;
        if (estado != null && !estado.isBlank()) {
            mesas = mesaRepository.findByEstado(estado.toUpperCase());
        } else {
            mesas = mesaRepository.findAll();
        }
        List<MesaResponseDTO> response = mesas.stream()
                .map(mesaMapper::toResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<MesaResponseDTO> obtenerMesaPorId(Long id) {
        Optional<Mesa> mesa = mesaRepository.findById(id);
        if (mesa.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(mesaMapper.toResponse(mesa.get()));
    }

    @Override
    public ResponseEntity<MesaResponseDTO> actualizarMesa(Long id, MesaRequestDTO request) {
        Optional<Mesa> existente = mesaRepository.findById(id);
        if (existente.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Mesa mesa = existente.get();
        mesa.setNumero(request.getNumero());
        mesa.setCapacidad(request.getCapacidad());
        mesa.setEstado(request.getEstado());
        Mesa actualizada = mesaRepository.save(mesa);
        return ResponseEntity.ok(mesaMapper.toResponse(actualizada));
    }

    @Override
    public ResponseEntity<Void> eliminarMesa(Long id) {
        if (!mesaRepository.existsById(id)) {
            return ResponseEntity.status(404).build();
        }
        mesaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
