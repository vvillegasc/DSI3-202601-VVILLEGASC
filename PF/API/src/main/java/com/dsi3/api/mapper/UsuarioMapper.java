package com.dsi3.api.mapper;

import org.springframework.stereotype.Component;

import com.dsi3.api.model.dto.UsuarioRequestDTO;
import com.dsi3.api.model.dto.UsuarioResponseDTO;
import com.dsi3.api.model.entity.Usuario;

@Component
public class UsuarioMapper {

    public Usuario toEntity(UsuarioRequestDTO dto) {
        return Usuario.builder()
                .nombre(dto.getNombre())
                .email(dto.getEmail())
                .activo(true)
                .build();
    }

    public UsuarioResponseDTO toResponse(Usuario entity) {
        return UsuarioResponseDTO.builder()
                .idUsuario(entity.getIdUsuario())
                .nombre(entity.getNombre())
                .email(entity.getEmail())
                .build();
    }
}
