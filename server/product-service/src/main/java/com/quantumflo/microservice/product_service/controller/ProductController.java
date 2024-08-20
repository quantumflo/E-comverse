package com.quantumflo.microservice.product_service.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quantumflo.microservice.product_service.dto.ProductRequest;
import com.quantumflo.microservice.product_service.dto.ProductResponse;
import com.quantumflo.microservice.product_service.service.ProductService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductResponse createProduct( @RequestBody ProductRequest productRequest) {
        return productService.createProduct(productRequest);
    }

    public List<ProductResponse> getAllProducts() {
        return productService.getAllProducts();
    }
    
}
