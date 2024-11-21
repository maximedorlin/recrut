package com.afreetech.recrutement.controller;


import com.afreetech.recrutement.entity.users.PasswordResetToken;
import com.afreetech.recrutement.entity.users.User;
import com.afreetech.recrutement.entity.users.UserRole;
import com.afreetech.recrutement.entity.users.dtos.*;
import com.afreetech.recrutement.repository.UserRepository;
import com.afreetech.recrutement.security.TokenService;
import com.afreetech.recrutement.service.PasswordResetService;
import com.afreetech.recrutement.service.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping(value = "/auth", produces = {"application/json"})
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private PasswordResetService passwordResetService;
    @Autowired
    private EmailService emailService;

    /**
     * Authenticates user login.
     *
     * @param data Object containing user credentials
     * @return ResponseEntity containing authentication token
     */
    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity login(@RequestBody AuthenticationDTO data) {
        var credentials = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(credentials);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    /**
     * Registers a new user.
     *
     * @param data Object containing user registration data
     * @return ResponseEntity indicating success or failure of registration
     */
//    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity register(@RequestBody RegisterDTO data) {
//        if (this.userRepository.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();
//
//        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
//        User user = new User(data.name(), data.email(), encryptedPassword, data.role());
//
//        this.userRepository.save(user);
//
//        return ResponseEntity.ok().build();
//    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody RegisterDTO data) {

        // Vérifie si l'utilisateur existe déjà
        if (this.userRepository.findByEmail(data.email()) != null) {
            return ResponseEntity.badRequest().body("Un utilisateur avec cet e-mail existe déjà.");
        }

        // Vérifie si les mots de passe correspondent
        if (!data.password().equals(data.confirmPassword())) {
            return ResponseEntity.badRequest().body("Les mots de passe ne correspondent pas.");
        }

        // Crypte le mot de passe
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());

        // Crée un nouvel utilisateur
        User user = new User(data.name(), data.email(), encryptedPassword, data.phoneNumber(),data.role());

        // Enregistre l'utilisateur dans la base de données
        this.userRepository.save(user);

        return ResponseEntity.ok("Utilisateur créé avec succès.");
    }




    @PostMapping(value = "/forgot-password", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> forgotPassword(@RequestBody ForgotPasswordDTO data) {
        User user = (User) userRepository.findByEmail(data.email());

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Utilisateur non trouvé");
        }

        // Génère un token sécurisé pour la réinitialisation du mot de passe
        PasswordResetToken passwordResetToken = passwordResetService.createToken(user);

        // Envoie un email avec le lien de réinitialisation
        emailService.sendPasswordResetEmail(user.getEmail(), passwordResetToken.getToken());

        return ResponseEntity.ok("Email envoyé pour réinitialisation du mot de passe");
    }


    @PostMapping(value = "/reset-password", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity resetPassword(@RequestParam String token, @RequestBody ResetPasswordDTO data) {
        // Valide le token (ex: vérifie dans la base de données)
        PasswordResetToken passwordResetToken = passwordResetService.findByToken(token);

        if (passwordResetToken == null || passwordResetToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            return ResponseEntity.badRequest().body("Le lien de réinitialisation est invalide ou a expiré");
        }



        // Réinitialise le mot de passe de l'utilisateur
        User user = passwordResetToken.getUser();
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.newPassword());
        user.setPassword(encryptedPassword);

        userRepository.save(user);

        return ResponseEntity.ok("Mot de passe réinitialisé avec succès");
    }


}
