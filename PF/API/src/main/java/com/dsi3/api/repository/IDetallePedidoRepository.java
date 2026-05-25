package com.dsi3.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.DetallePedido;

public interface IDetallePedidoRepository extends JpaRepository<DetallePedido, Long> {
}
