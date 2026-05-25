package com.dsi3.api.service.interfaces;

import org.springframework.http.ResponseEntity;

import com.dsi3.api.model.dto.DashboardResumenDTO;

public interface IDashboardService {

    ResponseEntity<DashboardResumenDTO> getResumen();
}
