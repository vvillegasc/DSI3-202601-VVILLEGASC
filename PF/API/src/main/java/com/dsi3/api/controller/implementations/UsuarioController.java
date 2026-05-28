package com.dsi3.api.controller.implementations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IUsuarioController;
import com.dsi3.api.model.dto.UsuarioRequestDTO;
import com.dsi3.api.model.dto.UsuarioResponseDTO;
import com.dsi3.api.service.interfaces.IUsuarioService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuarioController implements IUsuarioController {

    private final IUsuarioService usuarioService;

    @Override
    public ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request) {
        return usuarioService.login(request);
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> registro(UsuarioRequestDTO request) {
        return usuarioService.registro(request);
    }
}
