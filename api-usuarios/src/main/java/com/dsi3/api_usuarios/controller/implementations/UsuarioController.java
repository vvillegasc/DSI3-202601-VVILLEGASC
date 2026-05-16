package com.dsi3.api_usuarios.controller.implementations;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import com.dsi3.api_usuarios.controller.interfaces.IUsuarioController;
import com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import com.dsi3.api_usuarios.service.interfaces.IUsuarioService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuarioController implements IUsuarioController {

    private final IUsuarioService usuarioService;

    @Override
    public ResponseEntity<UsuarioResponseDTO> crearUsuario(UsuarioRequestDTO request) {
        return usuarioService.crearUsuario(request);
    }

    @Override
    public ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario() {
        return usuarioService.obtenerUsuario();
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> actualizarUsuario(Long id, UsuarioRequestDTO request) {
        return usuarioService.actualizarUsuario(id, request);
    }
    

    @Override
    public ResponseEntity<Void> eliminarUsuario(Long id) {
        return usuarioService.eliminarUsuario(id);
    }

    @Override
    public ResponseEntity<String> obtenerUsuarioPorId(Long id) {
        return usuarioService.obtenerUsuarioPorId(id);
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request) {
        return usuarioService.login(request);
    }
}
