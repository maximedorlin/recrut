package com.afreetech.recrutement.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class QuestionResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Question question;

    private String response; // Réponse de l'utilisateur

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private Candidature application; // Lien avec la candidature
}