package com.dsi3.api.controller.implementations;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IProductoController;
import com.dsi3.api.model.dto.ProductoRequestDTO;
import com.dsi3.api.model.dto.ProductoResponseDTO;
import com.dsi3.api.service.interfaces.IProductoService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class ProductoController implements IProductoController {

    private final IProductoService productoService;

    @Override
    public ResponseEntity<ProductoResponseDTO> crearProducto(ProductoRequestDTO request) {
        return productoService.crearProducto(request);
    }

    @Override
    public ResponseEntity<List<ProductoResponseDTO>> obtenerProductos(String categoria, Boolean disponible) {
        return productoService.obtenerProductos(categoria, disponible);
    }

    @Override
    public ResponseEntity<ProductoResponseDTO> obtenerProductoPorId(Long id) {
        return productoService.obtenerProductoPorId(id);
    }

    @Override
    public ResponseEntity<ProductoResponseDTO> actualizarProducto(Long id, ProductoRequestDTO request) {
        return productoService.actualizarProducto(id, request);
    }

    @Override
    public ResponseEntity<Void> eliminarProducto(Long id) {
        return productoService.eliminarProducto(id);
    }
}
