package com.dsi3.api.controller.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dsi3.api.model.dto.UsuarioRequestDTO;
import com.dsi3.api.model.dto.UsuarioResponseDTO;

import jakarta.validation.Valid;

@RequestMapping("/api/auth")
public interface IUsuarioController {

    @PostMapping("/login")
    ResponseEntity<UsuarioResponseDTO> login(@RequestBody @Valid UsuarioRequestDTO request);

    @PostMapping("/registro")
    ResponseEntity<UsuarioResponseDTO> registro(@RequestBody @Valid UsuarioRequestDTO request);
}
