package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rct_domaineComp")
public class DomaineComp {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "domaineComp_generator")
    private Long id;

    @Column(name = "nomType", nullable = false)
    private String nomType;


    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getNomType() {
        return nomType;
    }

    public void setNomType(String nomType) {
        this.nomType = nomType;
    }



    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "offre_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Offre offre;

    @OneToMany(mappedBy = "domaineComp", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Competence> competences = new ArrayList<>();


    public Offre getOffre() {
        return offre;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }

    public List<Competence> getCompetences() {
        return competences;
    }

    public void setCompetences(List<Competence> competences) {
        this.competences = competences;
    }

    // Methods for managing competencies
    public void addCompetence(Competence competence) {
        competences.add(competence);
        competence.setDomaineComp(this); 
    }

    public void removeCompetence(Competence competence) {
        competences.remove(competence);
        competence.setDomaineComp(null);
    }

    // Constructors
    public DomaineComp() {
    }

    public DomaineComp(String nomType) {
        this.nomType = nomType;
    }
}
