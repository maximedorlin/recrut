package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "domaine_id", nullable = false)
    @JsonIgnore
    private DomaineComp domaineComp;

    // Constructor for easier creation
    public Competence(String titre, String description, DomaineComp domaineComp) {
        this.titre = titre;
        this.description = description;
        this.domaineComp = domaineComp;
    }
}
