package com.dsi3.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Mesa;

public interface IMesaRepository extends JpaRepository<Mesa, Long> {

    List<Mesa> findByEstado(String estado);
    long countByEstado(String estado);
}
