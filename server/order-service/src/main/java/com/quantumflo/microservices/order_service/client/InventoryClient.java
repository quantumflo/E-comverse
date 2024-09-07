package com.quantumflo.microservices.order_service.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;

public interface InventoryClient {
    final Logger log = LoggerFactory.getLogger(InventoryClient.class);
    
    @GetExchange("api/inventory")
    @CircuitBreaker(name = "inventory", fallbackMethod = "isInStockFallback")
    @Retry(name = "inventory" )
    boolean isInStock(@RequestParam String skuCode, @RequestParam Integer quantity);


    default boolean isInStockFallback(String code, Integer quantity, Throwable throwable) {
        log.info("Cannot get inventory for skucode {}, failure reason: {}", code, throwable.getMessage());
        return false;
    }
}