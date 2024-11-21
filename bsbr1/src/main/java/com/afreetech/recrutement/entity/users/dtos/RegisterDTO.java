package com.afreetech.recrutement.entity.users.dtos;


import com.afreetech.recrutement.entity.users.UserRole;

public record RegisterDTO(String name, String email, String password, String confirmPassword, String phoneNumber, UserRole role) {
}
