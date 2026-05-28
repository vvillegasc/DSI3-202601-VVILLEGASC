package com.dsi3.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Producto;

public interface IProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByCategoria(String categoria);
    List<Producto> findByDisponible(boolean disponible);
    List<Producto> findByCategoriaAndDisponible(String categoria, boolean disponible);
    long countByDisponible(boolean disponible);
}
