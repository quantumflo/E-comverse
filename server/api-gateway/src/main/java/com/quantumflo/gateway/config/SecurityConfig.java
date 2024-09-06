package com.quantumflo.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;


// The method configures a security filter chain that requires all HTTP requests to be authenticated and 
// sets up the application as an OAuth2 resource server using JWT for authentication.
@Configuration
public class SecurityConfig {

    private final String[] allowedUrls = new String[] {"/swagger-ui.html", "/v3/api-docs/**", "/api-docs/**", "/swagger-ui/**", "/aggregate/**"};
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
            .authorizeHttpRequests(authorizeRequests -> authorizeRequests
            .requestMatchers(null, allowedUrls).permitAll()
            .anyRequest().authenticated())
            .oauth2ResourceServer(oauth2ResourceServer -> oauth2ResourceServer.jwt(Customizer.withDefaults())
            ).build();
    }
    
}
