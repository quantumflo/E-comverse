package com.quantumflo.microservices.order_service.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

import com.quantumflo.microservices.order_service.client.InventoryClient;

@Configuration
public class RestClientConfig {

    @Value("${inventory.url}")
    private String inventoryServiceURL;
    
    @Bean
    public InventoryClient inventoryClient() {
        RestClient restClient = RestClient.builder().baseUrl(inventoryServiceURL).build();
        RestClientAdapter adapter = RestClientAdapter.create(restClient);
        HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();

        return factory.createClient(InventoryClient.class); 
    }
}
