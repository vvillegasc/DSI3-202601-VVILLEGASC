package com.dsi3.api.service.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.ProductoRequestDTO;
import com.dsi3.api.model.dto.ProductoResponseDTO;

public interface IProductoService {

    ResponseEntity<ProductoResponseDTO> crearProducto(ProductoRequestDTO request);
    ResponseEntity<List<ProductoResponseDTO>> obtenerProductos(String categoria, Boolean disponible);
    ResponseEntity<ProductoResponseDTO> obtenerProductoPorId(Long id);
    ResponseEntity<ProductoResponseDTO> actualizarProducto(Long id, ProductoRequestDTO request);
    ResponseEntity<Void> eliminarProducto(Long id);
}
