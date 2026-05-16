package com.dsi3.api_usuarios.controller.interfaces;

import com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/usuarios")
public interface IUsuarioController {

    @PostMapping
    ResponseEntity<UsuarioResponseDTO> crearUsuario(@RequestBody UsuarioRequestDTO request);

    @GetMapping
    ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario();

    @PutMapping("/{id}")
    ResponseEntity<UsuarioResponseDTO> actualizarUsuario(@PathVariable Long id, @RequestBody UsuarioRequestDTO request);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> eliminarUsuario(@PathVariable Long id);

    @GetMapping("/{id}")
    ResponseEntity<String> obtenerUsuarioPorId(@PathVariable Long id);

    @PostMapping("/session")
    ResponseEntity<UsuarioResponseDTO> login(@RequestBody UsuarioRequestDTO request);
}
