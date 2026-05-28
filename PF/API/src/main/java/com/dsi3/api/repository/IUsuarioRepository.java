package com.dsi3.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi3.api.model.entity.Usuario;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);
}
