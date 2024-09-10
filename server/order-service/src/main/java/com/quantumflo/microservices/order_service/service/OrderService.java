package com.quantumflo.microservices.order_service.service;

import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.quantumflo.microservices.order_service.client.InventoryClient;
import com.quantumflo.microservices.order_service.dtos.OrderRequest;
import com.quantumflo.microservices.order_service.event.OrderPlacedEvent;
import com.quantumflo.microservices.order_service.model.Order;
import com.quantumflo.microservices.order_service.repository.OrderRepository;
// import groovy.util.logging.Slf4j;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
// @Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    private final InventoryClient inventoryClient;
    private final KafkaTemplate<String, OrderPlacedEvent> kafkaTemplate;
    
    public void placeOrder(OrderRequest orderRequest) {
        final Logger log = LoggerFactory.getLogger(OrderService.class);

        var isProductInStock = inventoryClient.isInStock(orderRequest.skuCode(), orderRequest.quantity());
        if( isProductInStock ) {
        Order order = new Order();
            order.setOrderNumber(UUID.randomUUID().toString());
            order.setQuantity(orderRequest.quantity());
            order.setPrice(orderRequest.price());
            order.setSkuCode(orderRequest.skuCode());
            orderRepository.save(order);
            // Send message to kaka topic
            // OrderPlacedEvent orderPlacedEvent = new OrderPlacedEvent(order.getOrderNumber(), orderRequest.userDetails().email());
            OrderPlacedEvent orderPlacedEvent = new OrderPlacedEvent(order.getOrderNumber(), orderRequest.userDetails()
            .email(),
            orderRequest.userDetails()
                    .firstName(),
            orderRequest.userDetails()
                    .lastName());
            log.info("OrderPlacedEvent started");
            kafkaTemplate.send("order-placed", orderPlacedEvent);
            log.info("OrderPlacedEvent Ended");
        } else {
            throw new RuntimeException("Product with skuCode " + orderRequest.skuCode() +"  is out of stock" );
            
        }    
    }
}
