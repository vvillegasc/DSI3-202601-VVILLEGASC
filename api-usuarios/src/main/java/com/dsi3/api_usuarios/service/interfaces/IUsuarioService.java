package main.java.com.dsi3.api_usuarios.service.interfaces;
import java.util.List;

import main.java.com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import main.java.com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;

public interface IUsuarioService {

    ResponseEntity<UsuarioResponseDTO> crearUsuario( UsuarioRequestDTO request);

    ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario();
}
