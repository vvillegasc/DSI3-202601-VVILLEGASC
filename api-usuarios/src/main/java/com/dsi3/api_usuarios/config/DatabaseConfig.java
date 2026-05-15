package main.java.com.dsi3.api_usuarios.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;


@Configuration
public class DatabaseConfig {

    @Bean
    JdbcTemplate configureDatabase(DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }
}
