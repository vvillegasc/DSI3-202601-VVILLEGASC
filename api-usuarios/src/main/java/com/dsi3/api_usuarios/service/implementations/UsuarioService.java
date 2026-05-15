package main.java.com.dsi3.api_usuarios.service.implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import main.java.com.dsi3.api_usuarios.model.dto.UsuarioRequestDTO;
import main.java.com.dsi3.api_usuarios.model.dto.UsuarioResponseDTO;
import main.java.com.dsi3.api_usuarios.model.entity.Usuario;
import main.java.com.dsi3.api_usuarios.repository.IUsuarioRepository;
import main.java.com.dsi3.api_usuarios.service.interfaces.IUsuarioService;

@Service
@AllArgsConstructor
public class UsuarioService implements IUsuarioService {
    
    private final IUsuarioRepository usuarioRepository;

    @Override
    public ResponseEntity<UsuarioResponseDTO> crearUsuario(UsuarioRequestDTO request) {

        Usuario usuario = usuarioMapper.usuarioRequestDTOToUsuario(request);
        
        Usuario newUser = usuarioRepository.save(usuario);

        UsuarioResponseDTO responseUser = usuarioMapper.usuarioToUsuarioResponseDTO(newUser);

        return ResponseEntity.status(201).body(responseUser);
    }

    @Override
    public ResponseEntity<List<UsuarioResponseDTO>> obtenerUsuario() {

        List<Usuario> usuarios = usuarioRepository.findAll();

        List<UsuarioResponseDTO> responseUsuarios = new ArrayList<>();

        for(int i=0; i<usuarios.size();i++){
        UsuarioResponseDTO responseUser = usuarioMapper.usuarioToUsuarioResponseDTO(usuarios.get(i));
            responseUsuarios.add(responseUser);
        }
        if(responseUsuarios){

            return ResponseEntity.ok(responseUsuarios);
        }

    return ResponseEntity.status(404).body(null);
}}
