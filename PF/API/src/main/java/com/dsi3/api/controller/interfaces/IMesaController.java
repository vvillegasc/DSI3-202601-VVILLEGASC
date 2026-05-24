package com.dsi3.api.controller.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dsi3.api.model.dto.MesaRequestDTO;
import com.dsi3.api.model.dto.MesaResponseDTO;

import jakarta.validation.Valid;

@RequestMapping("/api/mesas")
public interface IMesaController {

    @PostMapping
    ResponseEntity<MesaResponseDTO> crearMesa(@RequestBody @Valid MesaRequestDTO request);

    @GetMapping
    ResponseEntity<List<MesaResponseDTO>> obtenerMesas(@RequestParam(required = false) String estado);

    @GetMapping("/{id}")
    ResponseEntity<MesaResponseDTO> obtenerMesaPorId(@PathVariable Long id);

    @PutMapping("/{id}")
    ResponseEntity<MesaResponseDTO> actualizarMesa(@PathVariable Long id, @RequestBody @Valid MesaRequestDTO request);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> eliminarMesa(@PathVariable Long id);
}
