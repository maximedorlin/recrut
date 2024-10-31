package com.afreetech.recrutement.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "rct_mail")
public class Mail {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mail_generator")
    @Column(name = "id_mail")
    private Long id;

    @Column(name = "type_mail", nullable = false, length = 50)
    private String typeMail;

    @Column(name = "description_mail", nullable = false, length = 255)
    private String descriptionMail;

    @Column(name = "contenu_mail", nullable = false, columnDefinition = "TEXT")
    private String contenuMail;

    // Constructeur par défaut
    public Mail() {
        // Constructeur vide
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeMail() {
        return typeMail;
    }

    public void setTypeMail(String typeMail) {
        this.typeMail = typeMail;
    }

    public String getDescriptionMail() {
        return descriptionMail;
    }

    public void setDescriptionMail(String descriptionMail) {
        this.descriptionMail = descriptionMail;
    }

    public String getContenuMail() {
        return contenuMail;
    }

    public void setContenuMail(String contenuMail) {
        this.contenuMail = contenuMail;
    }


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "fk_id_cand", nullable = false)
    @JsonIgnore
    private Candidat candidat;

    public Candidat getcandidat() {
        return candidat;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }
}