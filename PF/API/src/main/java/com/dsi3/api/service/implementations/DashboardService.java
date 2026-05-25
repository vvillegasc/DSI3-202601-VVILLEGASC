package com.dsi3.api.service.implementations;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dsi3.api.model.dto.DashboardResumenDTO;
import com.dsi3.api.repository.IMesaRepository;
import com.dsi3.api.repository.IPedidoRepository;
import com.dsi3.api.repository.IProductoRepository;
import com.dsi3.api.service.interfaces.IDashboardService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DashboardService implements IDashboardService {

    private final IProductoRepository productoRepository;
    private final IMesaRepository mesaRepository;
    private final IPedidoRepository pedidoRepository;

    @Override
    public ResponseEntity<DashboardResumenDTO> getResumen() {
        long productosActivos = productoRepository.countByDisponible(true);
        long mesasDisponibles = mesaRepository.countByEstado("DISPONIBLE");
        long pedidosActivos = pedidoRepository.countByEstadoIn(List.of("CREADA", "EN_PREPARACION"));

        LocalDateTime inicioDia = LocalDate.now().atStartOfDay();
        LocalDateTime finDia = inicioDia.plusDays(1);
        long pedidosEntregadosHoy = pedidoRepository.countByEstadoAndFechaCreacion("ENTREGADA", inicioDia, finDia);

        DashboardResumenDTO resumen = DashboardResumenDTO.builder()
                .productosActivos(productosActivos)
                .mesasDisponibles(mesasDisponibles)
                .pedidosActivos(pedidosActivos)
                .pedidosEntregadosHoy(pedidosEntregadosHoy)
                .build();

        return ResponseEntity.ok(resumen);
    }
}
