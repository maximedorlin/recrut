package com.afreetech.recrutement.entity.users;

public enum UserRole {
    ADMIN("admin"),
    USER("user"),
    CANDIDAT("candidat");

    private String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return this.role;
    }
}
