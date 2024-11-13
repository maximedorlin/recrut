package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

import com.afreetech.recrutement.entity.users.User;

@Entity
@Data
public class Candidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private JobOffer jobOffer;

    @ManyToOne
    private User user;

    private Double score; // Score du questionnaire, si applicable

    @Temporal(TemporalType.DATE)
    private Date dateEnvoie;


    @OneToMany(mappedBy = "application", cascade = CascadeType.ALL) // Assurez-vous d'utiliser CascadeType.ALL
    private List<QuestionResponse> questionResponses; // Réponses aux questions
}