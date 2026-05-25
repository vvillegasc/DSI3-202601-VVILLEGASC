package com.dsi3.api.service.implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.mapper.ClienteMapper;
import com.dsi3.api.model.dto.ClienteRequestDTO;
import com.dsi3.api.model.dto.ClienteResponseDTO;
import com.dsi3.api.model.entity.Cliente;
import com.dsi3.api.repository.IClienteRepository;
import com.dsi3.api.service.interfaces.IClienteService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ClienteService implements IClienteService {

    private final IClienteRepository clienteRepository;
    private final ClienteMapper clienteMapper;

    @Override
    public ResponseEntity<ClienteResponseDTO> crearCliente(ClienteRequestDTO request) {
        Cliente cliente = clienteMapper.toEntity(request);
        Cliente guardado = clienteRepository.save(cliente);
        return ResponseEntity.status(201).body(clienteMapper.toResponse(guardado));
    }

    @Override
    public ResponseEntity<List<ClienteResponseDTO>> obtenerClientes(String busqueda) {
        List<Cliente> clientes;
        if (busqueda != null && !busqueda.isBlank()) {
            clientes = clienteRepository.findByNombre(busqueda, busqueda);
        } else {
            clientes = clienteRepository.findAll();
        }
        List<ClienteResponseDTO> response = clientes.stream()
                .map(clienteMapper::toResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<ClienteResponseDTO> obtenerClientePorId(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(clienteMapper.toResponse(cliente.get()));
    }

    @Override
    public ResponseEntity<ClienteResponseDTO> actualizarCliente(Long id, ClienteRequestDTO request) {
        Optional<Cliente> existente = clienteRepository.findById(id);
        if (existente.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Cliente cliente = existente.get();
        cliente.setNombre(request.getNombre());
        cliente.setTelefono(request.getTelefono());
        cliente.setEmail(request.getEmail());
        Cliente actualizado = clienteRepository.save(cliente);
        return ResponseEntity.ok(clienteMapper.toResponse(actualizado));
    }

    @Override
    public ResponseEntity<Void> eliminarCliente(Long id) {
        if (!clienteRepository.existsById(id)) {
            return ResponseEntity.status(404).build();
        }
        clienteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
