package com.dsi3.api.service.implementations;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.mapper.UsuarioMapper;
import com.dsi3.api.model.dto.UsuarioRequestDTO;
import com.dsi3.api.model.dto.UsuarioResponseDTO;
import com.dsi3.api.model.entity.Usuario;
import com.dsi3.api.repository.IUsuarioRepository;
import com.dsi3.api.service.interfaces.IUsuarioService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UsuarioService implements IUsuarioService {

    private final IUsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;

    @Override
    public ResponseEntity<UsuarioResponseDTO> registro(UsuarioRequestDTO request) {
        if (request.getNombre() == null || request.getNombre().isBlank()) {
            return ResponseEntity.badRequest().body(null);
        }
        Optional<Usuario> existente = usuarioRepository.findByEmail(request.getEmail());
        if (existente.isPresent()) {
            return ResponseEntity.status(409).body(null);
        }
        Usuario usuario = usuarioMapper.toEntity(request);
        usuario.setPasswordHash(hashMD5(request.getPassword()));
        Usuario guardado = usuarioRepository.save(usuario);
        return ResponseEntity.status(201).body(usuarioMapper.toResponse(guardado));
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(request.getEmail());
        if (usuario.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        if (!usuario.get().getPasswordHash().equals(hashMD5(request.getPassword()))) {
            return ResponseEntity.status(401).body(null);
        }
        return ResponseEntity.ok(usuarioMapper.toResponse(usuario.get()));
    }

    private String hashMD5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] hash = md.digest(input.getBytes(StandardCharsets.UTF_8));
            StringBuilder hex = new StringBuilder();
            for (byte b : hash) {
                hex.append(String.format("%02x", b));
            }
            return hex.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error al generar hash MD5", e);
        }
    }
}
