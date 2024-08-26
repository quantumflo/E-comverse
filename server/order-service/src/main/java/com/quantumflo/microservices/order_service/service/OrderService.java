package com.quantumflo.microservices.order_service.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.quantumflo.microservices.order_service.client.InventoryClient;
import com.quantumflo.microservices.order_service.dtos.OrderRequest;
import com.quantumflo.microservices.order_service.model.Order;
import com.quantumflo.microservices.order_service.repository.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final InventoryClient inventoryClient;
    
    public void placeOrder(OrderRequest orderRequest) {

        var isProductInStock = inventoryClient.isInStock(orderRequest.skuCode(), orderRequest.quantity());
        if( isProductInStock ) {
        Order order = new Order();
            order.setOrderNumber(UUID.randomUUID().toString());
            order.setQuantity(orderRequest.quantity());
            order.setPrice(orderRequest.price());
            order.setSkuCode(orderRequest.skuCode());
            orderRepository.save(order);
        } else {
            throw new RuntimeException("Product with skuCode " + orderRequest.skuCode() +"  is out of stock" );
            
        }    
    }
}
