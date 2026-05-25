package com.dsi3.api.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Pedido;

public interface IPedidoRepository extends JpaRepository<Pedido, Long> {

    List<Pedido> findByEstado(String estado);
    long countByEstadoIn(List<String> estados);
    long countByEstadoAndFechaCreacionBetween(String estado, LocalDateTime inicio, LocalDateTime fin);
}
