package main.java.com.dsi3.api_usuarios.mapper;

import main.java.com.dsi3.api_usuarios.model.Usuario;
import main.java.com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import main.java.com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;

public class UsuarioMapper {

    public Usuario usuarioRequestDTOToUsuario(UsuarioRequestDTO dto) {
        return Usuario.builder()
                .nombre(dto.getNombre())
                .build();
    }

    public UsuarioResponseDTO usuarioToUsuarioResponseDTO(Usuario usuario) {
        return UsuarioResponseDTO.builder()
                .id(usuario.getId())
                .nombre(usuario.getNombre())
                .build();
    }   
}
