package com.dsi3.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Mesa;
import com.dsi3.api.model.entity.Mesa.EstadoMesa;

public interface IMesaRepository extends JpaRepository<Mesa, Long> {

    List<Mesa> findByEstado(EstadoMesa estado);
    long countByEstado(EstadoMesa estado);
    boolean existsByNumero(int numero);
    boolean existsByNumeroAndIdMesaNot(int numero, Long idMesa);
}
