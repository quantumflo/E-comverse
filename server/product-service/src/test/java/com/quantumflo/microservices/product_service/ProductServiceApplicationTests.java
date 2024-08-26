package com.quantumflo.microservices.product_service;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.testcontainers.containers.MongoDBContainer;

import io.restassured.RestAssured;

@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT )
class ProductServiceApplicationTests {

	@ServiceConnection
	static MongoDBContainer mongoContainer = new MongoDBContainer("mongo:7.0.5");
	@LocalServerPort
	private Integer port;


	@BeforeEach
	void setUp() {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = port;
	}

	static {
		mongoContainer.start();
		System.setProperty("spring.data.mongodb.uri", mongoContainer.getReplicaSetUrl());
	}

	@Test
	void shouldCreateProduct() {
		String requestBodString = """
				{
					"name": "S23 Ultra",
					"description": "Samsung Galaxy S23 Ultra",
					"price": 90000
				}
				""";

				RestAssured.given().contentType("application/json")
				.body(requestBodString).when().post("/api/product")
				.then().statusCode(201)
				.body("id", Matchers.notNullValue())
				.body("name", Matchers.equalTo("S23 Ultra"))
				.body("description", Matchers.equalTo("Samsung Galaxy S23 Ultra"))
				.body("price", Matchers.equalTo(90000));

	}

}
