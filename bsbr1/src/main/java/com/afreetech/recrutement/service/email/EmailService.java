package com.afreetech.recrutement.service.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendPasswordResetEmail(String email, String token) {
        String subject = "Réinitialisation de votre mot de passe";
        String resetUrl = "http://localhost:8081/auth/reset-password?token=" + token;
        String message = "Cliquez sur le lien suivant pour réinitialiser votre mot de passe : " + resetUrl;

        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        mailSender.send(emailMessage);
    }
}

