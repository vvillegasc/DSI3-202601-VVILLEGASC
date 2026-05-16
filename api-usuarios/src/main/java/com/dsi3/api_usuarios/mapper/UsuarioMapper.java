package com.dsi3.api_usuarios.mapper;

import com.dsi3.api_usuarios.model.entity.Usuario;
import com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {

    public Usuario usuarioRequestDTOToUsuario(UsuarioRequestDTO dto) {
        return Usuario.builder()
                .nombre(dto.getNombre())
                .edad(dto.getEdad())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .build();
    }

    public UsuarioResponseDTO usuarioToUsuarioResponseDTO(Usuario usuario) {
        return UsuarioResponseDTO.builder()
                .id(usuario.getId())
                .nombre(usuario.getNombre())
                .email(usuario.getEmail())
                .edad(usuario.getEdad())
                .build();
    }
}
