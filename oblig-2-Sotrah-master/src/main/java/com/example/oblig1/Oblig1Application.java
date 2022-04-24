package com.example.oblig1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.annotation.PostConstruct;

@SpringBootApplication
public class Oblig1Application {

    public static void main(String[] args) {
        SpringApplication.run(Oblig1Application.class, args);
    }

    @PostConstruct
    private void init() {
        // Denne kjører ved oppstart. Kan legge inn kode her!
    }
}
