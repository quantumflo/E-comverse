package com.quantumflo.microservice.order_service.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.quantumflo.microservice.order_service.model.Order;
import com.quantumflo.microservice.order_service.repository.OrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    
    public void placeOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setQuantity(orderRequest.quantity());
        order.setPrice(orderRequest.price());
        order.setSkuCode(orderRequest.skuCode());
        orderRepository.save(order);

    }
}
