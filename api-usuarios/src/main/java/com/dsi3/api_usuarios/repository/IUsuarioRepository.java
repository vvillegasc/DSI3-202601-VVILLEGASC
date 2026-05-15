package main.java.com.dsi3.api_usuarios.repository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {

ResponseEntity<UsuarioResponseDTO> crearUsuario( UsuarioRequestDTO request);
ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario();

}
