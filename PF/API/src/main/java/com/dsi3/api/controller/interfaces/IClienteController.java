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

import com.dsi3.api.model.dto.ClienteRequestDTO;
import com.dsi3.api.model.dto.ClienteResponseDTO;

import jakarta.validation.Valid;

@RequestMapping("/api/clientes")
public interface IClienteController {

    @PostMapping
    ResponseEntity<ClienteResponseDTO> crearCliente(@RequestBody @Valid ClienteRequestDTO request);

    @GetMapping
    ResponseEntity<List<ClienteResponseDTO>> obtenerClientes(@RequestParam(required = false) String busqueda);

    @GetMapping("/{id}")
    ResponseEntity<ClienteResponseDTO> obtenerClientePorId(@PathVariable Long id);

    @PutMapping("/{id}")
    ResponseEntity<ClienteResponseDTO> actualizarCliente(@PathVariable Long id, @RequestBody @Valid ClienteRequestDTO request);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> eliminarCliente(@PathVariable Long id);
}
