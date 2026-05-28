package com.dsi3.api.controller.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dsi3.api.model.dto.DashboardResumenDTO;

@RequestMapping("/api/dashboard")
public interface IDashboard {

    @GetMapping("/resumen")
    ResponseEntity<DashboardResumenDTO> getResumen();
}
