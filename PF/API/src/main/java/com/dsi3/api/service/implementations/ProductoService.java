package com.dsi3.api.service.implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.mapper.ProductoMapper;
import com.dsi3.api.model.dto.ProductoRequestDTO;
import com.dsi3.api.model.dto.ProductoResponseDTO;
import com.dsi3.api.model.entity.Producto;
import com.dsi3.api.repository.IProductoRepository;
import com.dsi3.api.service.interfaces.IProductoService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductoService implements IProductoService {

    private final IProductoRepository productoRepository;
    private final ProductoMapper productoMapper;

    @Override
    public ResponseEntity<ProductoResponseDTO> crearProducto(ProductoRequestDTO request) {
        Producto producto = productoMapper.toEntity(request);
        Producto guardado = productoRepository.save(producto);
        return ResponseEntity.status(201).body(productoMapper.toResponse(guardado));
    }

    @Override
    public ResponseEntity<List<ProductoResponseDTO>> obtenerProductos(String categoria, Boolean disponible) {
        List<Producto> productos;
        if (categoria != null && disponible != null) {
            productos = productoRepository.findByCategoriaAndDisponible(categoria, disponible);
        } else if (categoria != null) {
            productos = productoRepository.findByCategoria(categoria);
        } else if (disponible != null) {
            productos = productoRepository.findByDisponible(disponible);
        } else {
            productos = productoRepository.findAll();
        }
        List<ProductoResponseDTO> response = productos.stream()
                .map(productoMapper::toResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<ProductoResponseDTO> obtenerProductoPorId(Long id) {
        Optional<Producto> producto = productoRepository.findById(id);
        if (producto.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(productoMapper.toResponse(producto.get()));
    }

    @Override
    public ResponseEntity<ProductoResponseDTO> actualizarProducto(Long id, ProductoRequestDTO request) {
        Optional<Producto> existente = productoRepository.findById(id);
        if (existente.isEmpty()) {
            return ResponseEntity.status(404).body(null);
        }
        Producto producto = existente.get();
        producto.setNombre(request.getNombre());
        producto.setDescripcion(request.getDescripcion());
        producto.setPrecio(request.getPrecio());
        producto.setCategoria(request.getCategoria());
        producto.setImagenUrl(request.getImagenUrl());
        producto.setDisponible(request.getDisponible());
        producto.setStock(request.getStock());
        Producto actualizado = productoRepository.save(producto);
        return ResponseEntity.ok(productoMapper.toResponse(actualizado));
    }

    @Override
    public ResponseEntity<Void> eliminarProducto(Long id) {
        if (!productoRepository.existsById(id)) {
            return ResponseEntity.status(404).build();
        }
        productoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
