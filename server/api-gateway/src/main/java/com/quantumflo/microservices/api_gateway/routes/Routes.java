import java.net.URI;
package com.quantumflo.microservices.api_gateway.routes;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class Routes {

    @Bean
    public RouterFunction<ServerResponse> productServiceRoute() {
    return GatewayRouterFunctions.route("product_service")
            .route(RequestPredicates.path("/api/product"), HandlerFunctions.http("localhost:8080"))
            .build();
    }
}
