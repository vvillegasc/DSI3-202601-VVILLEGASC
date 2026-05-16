package com.dsi3.api_usuarios.service.implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.dsi3.api_usuarios.mapper.UsuarioMapper;
import com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import com.dsi3.api_usuarios.model.entity.Usuario;
import com.dsi3.api_usuarios.repository.IUsuarioRepository;
import com.dsi3.api_usuarios.service.interfaces.IUsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UsuarioService implements IUsuarioService {

    private final IUsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;

    @Override
    public ResponseEntity<UsuarioResponseDTO> crearUsuario(UsuarioRequestDTO request) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findByEmail(request.getEmail());
        if (usuarioExistente.isPresent()) {
            return ResponseEntity.status(409).body(null);
        }
        Usuario usuario = usuarioMapper.usuarioRequestDTOToUsuario(request);
        Usuario newUser = usuarioRepository.save(usuario);
        UsuarioResponseDTO responseUser = usuarioMapper.usuarioToUsuarioResponseDTO(newUser);
        return ResponseEntity.status(201).body(responseUser);
    }

    @Override
    public ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario() {
        List<Usuario> usuarios = usuarioRepository.findAll();

        List<UsuarioResponseDTO> responseUsuarios = new ArrayList<>();
        for (int i = 0; i < usuarios.size(); i++) {
            responseUsuarios.add(usuarioMapper.usuarioToUsuarioResponseDTO(usuarios.get(i)));
        }

        if (!responseUsuarios.isEmpty()) {
            return ResponseEntity.ok(responseUsuarios);
        }

        return ResponseEntity.status(404).body(null);
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> actualizarUsuario(Long id, UsuarioRequestDTO request) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);
        if (usuarioExistente.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }

        Usuario usuario = usuarioExistente.get();
        usuario.setNombre(request.getNombre());
        usuario.setEdad(request.getEdad());
        usuario.setEmail(request.getEmail());
        usuario.setPassword(request.getPassword());

        Usuario usuarioActualizado = usuarioRepository.save(usuario);
        UsuarioResponseDTO response = usuarioMapper.usuarioToUsuarioResponseDTO(usuarioActualizado);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Void> eliminarUsuario(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        usuarioRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<String> obtenerUsuarioPorId(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isEmpty()) {
            return ResponseEntity.status(404).body("Usuario no encontrado");
        }

        UsuarioResponseDTO response = usuarioMapper.usuarioToUsuarioResponseDTO(usuario.get());
        String resultado = "ID: " + response.getId()
                + ", Nombre: " + response.getNombre()
                + ", Email: " + response.getEmail()
                + ", Edad: " + response.getEdad();
        return ResponseEntity.ok(resultado);
    }

    @Override
    public ResponseEntity<UsuarioResponseDTO> login(UsuarioRequestDTO request) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(request.getEmail());
        if (usuario.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }

        if (!usuario.get().getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(401).body(null);
        }

        UsuarioResponseDTO response = usuarioMapper.usuarioToUsuarioResponseDTO(usuario.get());
        return ResponseEntity.ok(response);
    }
}
