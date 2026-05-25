package com.dsi3.api.service.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.ClienteRequestDTO;
import com.dsi3.api.model.dto.ClienteResponseDTO;

public interface IClienteService {

    ResponseEntity<ClienteResponseDTO> crearCliente(ClienteRequestDTO request);
    ResponseEntity<List<ClienteResponseDTO>> obtenerClientes(String busqueda);
    ResponseEntity<ClienteResponseDTO> obtenerClientePorId(Long id);
    ResponseEntity<ClienteResponseDTO> actualizarCliente(Long id, ClienteRequestDTO request);
    ResponseEntity<Void> eliminarCliente(Long id);
}
