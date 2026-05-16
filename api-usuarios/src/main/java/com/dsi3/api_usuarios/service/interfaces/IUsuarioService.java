package com.dsi3.api_usuarios.service.interfaces;

import java.util.List;

import com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IUsuarioService {

    ResponseEntity<UsuarioResponseDTO> crearUsuario(UsuarioRequestDTO request);

    ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario();

    ResponseEntity<UsuarioResponseDTO> actualizarUsuario(Long id, UsuarioRequestDTO request);
    ResponseEntity<Void> eliminarUsuario(Long id);
    ResponseEntity<String> obtenerUsuarioPorId(Long id);
    ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request);
}
