package com.dsi3.api.service.interfaces;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.UsuarioRequestDTO;
import com.dsi3.api.model.dto.UsuarioResponseDTO;

public interface IUsuarioService {
    ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request);
    ResponseEntity<UsuarioResponseDTO> registro(UsuarioRequestDTO request);
}
