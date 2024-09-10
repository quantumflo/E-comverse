package com.quantumFlo.microservices.notification_service;

import org.springframework.boot.SpringApplication;

import com.quantumflo.microservices.notification_service.NotificationServiceApplication;

public class TestNotificationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(NotificationServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
