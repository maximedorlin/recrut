package com.afreetech.recrutement;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors implements WebMvcConfigurer {

@Override
public void addCorsMappings(@NonNull CorsRegistry registry) {
registry.addMapping("/**")
.allowedOrigins("http://localhost:5174")
.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
.allowedHeaders("*")
.allowCredentials(true);
}
}