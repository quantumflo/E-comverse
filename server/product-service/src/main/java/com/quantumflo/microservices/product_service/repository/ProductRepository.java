package com.quantumflo.microservices.product_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.quantumflo.microservices.product_service.model.Product;

/**
 * ProductRepository
 */
public interface ProductRepository extends MongoRepository<Product, String> {
    
}