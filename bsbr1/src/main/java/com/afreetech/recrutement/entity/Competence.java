package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rct_competence")
public class Competence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_competence")
    private Long id;

    @Column(name = "titre", nullable = false, length = 100)
    private String titre;

    @Column(name = "description", nullable = false)
    private String description;

    // Constructeur par défaut
    public Competence() {
        // Constructeur vide
    }

    // Constructeur avec paramètres
    public Competence(String titre, String description, DomaineComp domaineComp) {
        this.titre = titre;
        this.description = description;
        this.domaineComp = domaineComp;
    }

    // Getters et Setters
    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @ManyToOne(fetch = FetchType.LAZY, optional = false )
    @JoinColumn(name = "domaine_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private DomaineComp domaineComp;
    
    public DomaineComp getDomaineComp() {
      return domaineComp;
    }
  
    public void setDomaineComp(DomaineComp domaineComp) {
      this.domaineComp = domaineComp;
    }


}