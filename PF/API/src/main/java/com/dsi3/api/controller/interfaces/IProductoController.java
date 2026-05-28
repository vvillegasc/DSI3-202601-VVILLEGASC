package com.dsi3.api.controller.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dsi3.api.model.dto.ProductoRequestDTO;
import com.dsi3.api.model.dto.ProductoResponseDTO;

import jakarta.validation.Valid;

@RequestMapping("/api/productos")
public interface IProductoController {

    @PostMapping
    ResponseEntity<ProductoResponseDTO> crearProducto(@RequestBody @Valid ProductoRequestDTO request);

    @GetMapping
    ResponseEntity<List<ProductoResponseDTO>> obtenerProductos(
            @RequestParam(required = false) String categoria,
            @RequestParam(required = false) Boolean disponible);

    @GetMapping("/{id}")
    ResponseEntity<ProductoResponseDTO> obtenerProductoPorId(@PathVariable Long id);

    @PutMapping("/{id}")
    ResponseEntity<ProductoResponseDTO> actualizarProducto(@PathVariable Long id, @RequestBody @Valid ProductoRequestDTO request);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> eliminarProducto(@PathVariable Long id);
}
