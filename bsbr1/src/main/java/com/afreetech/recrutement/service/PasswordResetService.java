package com.afreetech.recrutement.service;



import com.afreetech.recrutement.entity.users.PasswordResetToken;
import com.afreetech.recrutement.entity.users.User;
import com.afreetech.recrutement.repository.PasswordResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PasswordResetService {

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    public PasswordResetToken createToken(User user) {
        String token = UUID.randomUUID().toString();
        PasswordResetToken passwordResetToken = new PasswordResetToken(token, user, LocalDateTime.now().plusHours(2));

        return tokenRepository.save(passwordResetToken);
    }

    public PasswordResetToken findByToken(String token) {
        return tokenRepository.findByToken(token);
    }
}


