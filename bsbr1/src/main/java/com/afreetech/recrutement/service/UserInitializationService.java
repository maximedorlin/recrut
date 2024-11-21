package com.afreetech.recrutement.service;

import com.afreetech.recrutement.entity.users.User;
import com.afreetech.recrutement.entity.users.UserRole;
import com.afreetech.recrutement.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInitializationService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void init() {
        createDefaultUser();
    }

    private void createDefaultUser() {
        if (userRepository.findByEmail("admin@gmail.com") == null) {
            String defaultPassword = new BCryptPasswordEncoder().encode("admin");
            User defaultUser = new User("admin", "admin@gmail.com", defaultPassword, "656963212", UserRole.ADMIN);
            userRepository.save(defaultUser);
            System.out.println("Utilisateur par défaut créé avec succès.");
        } else {
            System.out.println("L'utilisateur par défaut existe déjà.");
        }
    }
}