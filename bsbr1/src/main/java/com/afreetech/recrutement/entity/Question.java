package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "question")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String choix; // Peut être un JSON ou une liste de choix
    private String reponseCorrecte;
}