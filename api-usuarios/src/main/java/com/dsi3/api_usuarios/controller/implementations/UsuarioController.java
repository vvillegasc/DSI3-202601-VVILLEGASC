package main.java.com.dsi3.api_usuarios.controller.implementations;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import com.dsi3.api_usuarios.controller.interfaces.IUsuarioController;
import com.dsi3.api_usuarios.dto.request.UsuarioRequestDTO;
import com.dsi3.api_usuarios.dto.response.UsuarioResponseDTO;
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


}
