package com.quantumflo.microservices.order_service.dtos;

import java.math.BigDecimal;

public record OrderRequest( Integer quantity, BigDecimal price, String skuCode, UserDetails userDetails ) {
    public record UserDetails( String email, String firstName, String lastName ) {
    }
}
