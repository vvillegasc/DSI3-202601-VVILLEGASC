package com.dsi3.api.mapper;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.dsi3.api.model.dto.ClienteRequestDTO;
import com.dsi3.api.model.dto.ClienteResponseDTO;
import com.dsi3.api.model.entity.Cliente;

@Component
public class ClienteMapper {

    public Cliente toEntity(ClienteRequestDTO dto) {
        return Cliente.builder()
                .nombre(dto.getNombre())
                .telefono(dto.getTelefono())
                .email(dto.getEmail())
                .fechaRegistro(LocalDateTime.now())
                .build();
    }

    public ClienteResponseDTO toResponse(Cliente entity) {
        return ClienteResponseDTO.builder()
                .idCliente(entity.getIdCliente())
                .nombre(entity.getNombre())
                .telefono(entity.getTelefono())
                .email(entity.getEmail())
                .fechaRegistro(entity.getFechaRegistro())
                .build();
    }
}
