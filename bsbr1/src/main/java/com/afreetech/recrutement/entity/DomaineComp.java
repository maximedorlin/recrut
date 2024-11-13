package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rct_domaineComp")
public class DomaineComp {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "domaineComp_generator")
    private Long id;

    @Column(name = "nomType", nullable = false)
    private String nomType;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "offre_id", nullable = false)
    @JsonIgnore
    private JobOffer offre;

    @OneToMany(mappedBy = "domaineComp", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Competence> competences = new ArrayList<>();

    // Methods for managing competencies
    public void addCompetence(Competence competence) {
        competences.add(competence);
        competence.setDomaineComp(this); 
    }

    public void removeCompetence(Competence competence) {
        competences.remove(competence);
        competence.setDomaineComp(null);
    }
}
