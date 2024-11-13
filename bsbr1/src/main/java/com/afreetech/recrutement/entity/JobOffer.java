package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job_offers")
public class JobOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    
    private String description;

    @Temporal(TemporalType.DATE)
    private Date datePost;

    @Temporal(TemporalType.DATE)
    private Date dateLimite;

    private String companyName;

    private String ficheAnnonce;

    private String typeContrat ;

    private Boolean statut;

    @OneToMany(mappedBy = "offre", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DomaineComp> domaineComps = new ArrayList<>();

    // Methods for managing competencies
    public void addDomaineComp(DomaineComp domaineComp) {
        domaineComps.add(domaineComp);
        domaineComp.setOffre(this); 
    }

    public void removeDomaineComp(DomaineComp domaineComp) {
        domaineComps.remove(domaineComp);
        domaineComp.setOffre(null);
    }
}
