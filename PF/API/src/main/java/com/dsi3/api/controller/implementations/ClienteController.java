package com.dsi3.api.controller.implementations;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IClienteController;
import com.dsi3.api.model.dto.ClienteRequestDTO;
import com.dsi3.api.model.dto.ClienteResponseDTO;
import com.dsi3.api.service.interfaces.IClienteService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class ClienteController implements IClienteController {

    private final IClienteService clienteService;

    @Override
    public ResponseEntity<ClienteResponseDTO> crearCliente(ClienteRequestDTO request) {
        return clienteService.crearCliente(request);
    }

    @Override
    public ResponseEntity<List<ClienteResponseDTO>> obtenerClientes(String busqueda) {
        return clienteService.obtenerClientes(busqueda);
    }

    @Override
    public ResponseEntity<ClienteResponseDTO> obtenerClientePorId(Long id) {
        return clienteService.obtenerClientePorId(id);
    }

    @Override
    public ResponseEntity<ClienteResponseDTO> actualizarCliente(Long id, ClienteRequestDTO request) {
        return clienteService.actualizarCliente(id, request);
    }

    @Override
    public ResponseEntity<Void> eliminarCliente(Long id) {
        return clienteService.eliminarCliente(id);
    }
}
