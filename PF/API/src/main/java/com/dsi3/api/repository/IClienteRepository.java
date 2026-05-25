package com.dsi3.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Cliente;

public interface IClienteRepository extends JpaRepository<Cliente, Long> {

    List<Cliente> findByNombre(String nombre, String email);
}
