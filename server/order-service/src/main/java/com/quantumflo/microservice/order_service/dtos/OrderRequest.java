package com.quantumflo.microservice.order_service.dtos;

import java.math.BigDecimal;

public record OrderRequest(  Long id, String orderNumber, Integer quantity, BigDecimal price, String skuCode ) {
    
}
