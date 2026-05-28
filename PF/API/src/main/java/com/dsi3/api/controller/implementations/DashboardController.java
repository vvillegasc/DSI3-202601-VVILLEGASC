package com.dsi3.api.controller.implementations;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.dsi3.api.controller.interfaces.IDashboard;
import com.dsi3.api.model.dto.DashboardResumenDTO;
import com.dsi3.api.service.interfaces.IDashboardService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class DashboardController implements IDashboard {

    private final IDashboardService dashboardService;

    @Override
    public ResponseEntity<DashboardResumenDTO> getResumen() {
        return dashboardService.getResumen();
    }
}
