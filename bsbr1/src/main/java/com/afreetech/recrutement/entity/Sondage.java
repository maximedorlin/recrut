package com.afreetech.recrutement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "rct_sondage")
public class Sondage {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sondage_generator")
    private long id;

    @Column(name = "titre", nullable = false, length = 100)
    private String titre;

    @Column(name = "question", nullable = false)
    private String question; 

    @Column(name = "reponce_vrai", nullable = false)
    private boolean reponceVrai; 

    @Enumerated(EnumType.STRING)
    @Column(name = "reponces", nullable = false)
    private Reponce reponce; 

    public enum Reponce {
        Reponce1,
        Reponce2,
        Reponce3;
    }

    public Reponce getReponce() {
        return reponce;
    }

    public void setReponce(Reponce reponce) {
        this.reponce = reponce;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @Override
    public String toString() {
        return "sondage [id=" + id + ", question=" + question + ", titre=" + titre + ", reponce=" + reponce + ", reponceVrai" + reponceVrai +"]";
    }

    public Sondage() {
    }

    public Sondage(String question, String titre, Reponce reponce) {
        this.question = question;
        this.titre = titre;
        this.reponce = reponce;
    }
}