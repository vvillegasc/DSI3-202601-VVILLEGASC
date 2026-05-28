package com.dsi3.api.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Pedido;
import com.dsi3.api.model.entity.Pedido.EstadoPedido;

public interface IPedidoRepository extends JpaRepository<Pedido, Long> {

    List<Pedido> findByEstado(EstadoPedido estado);
    List<Pedido> findByCliente_IdCliente(Long idCliente);
    long countByEstadoIn(List<EstadoPedido> estados);
    long countByEstadoAndFechaCreacionBetween(EstadoPedido estado, LocalDateTime inicio, LocalDateTime fin);
    long countByMesa_IdMesaAndEstadoIn(Long idMesa, List<EstadoPedido> estados);
}
