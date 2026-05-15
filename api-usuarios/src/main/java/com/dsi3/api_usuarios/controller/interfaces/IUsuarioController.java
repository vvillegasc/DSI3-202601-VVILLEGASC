package main.java.com.dsi3.api_usuarios.controller.interfaces;
import com.dsi3.api_usuarios.dto.request.UsuarioRequestDTO;
import com.dsi3.api_usuarios.dto.response.UsuarioResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/usuarios")
public interface IUsuarioController {


    @PostMapping()
    ResponseEntity<UsuarioResponseDTO> crearUsuario(@RequestBody UsuarioRequestDTO request);

    @GetMapping()
    ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario();

}
