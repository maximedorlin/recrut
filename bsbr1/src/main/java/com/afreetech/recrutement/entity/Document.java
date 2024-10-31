package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rct_document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "document_generator")
    private Long id;

    public Long getId() {
        return id;
    }

    @Column(name = "annee_obtention", nullable = false)
    private Long anneeObtention;

    @Column(name = "titre_doc", nullable = false, length = 200)
    private String titreDoc;

    @Column(name = "etablissement_obtention", nullable = false, length = 200)
    private String etablissementObtention;

    @Column(name = "mention", nullable = false)
    private Long mention;

    @Column(name = "doc_courant", nullable = false)
    private Boolean docCourant;

    public Document() {
    }

    public Document(Long anneeObtention, String titreDoc, String etablissementObtention,
            Long mention, Long type, Boolean docCourant) {
        this.anneeObtention = anneeObtention;
        this.titreDoc = titreDoc;
        this.etablissementObtention = etablissementObtention;
        this.mention = mention;
        this.docCourant = docCourant;
    }

    public Long getAnneeObtention() {
        return anneeObtention;
    }

    public void setAnneeObtention(Long anneeObtention) {
        this.anneeObtention = anneeObtention;
    }

    public String getTitreDoc() {
        return titreDoc;
    }

    public void setTitreDoc(String titreDoc) {
        this.titreDoc = titreDoc;
    }

    public String getEtablissementObtention() {
        return etablissementObtention;
    }

    public void setEtablissementObtention(String etablissementObtention) {
        this.etablissementObtention = etablissementObtention;
    }

    public Long getMention() {
        return mention;
    }

    public void setMention(Long mention) {
        this.mention = mention;
    }


    public Boolean getDocCourant() {
        return docCourant;
    }

    public void setDocCourant(Boolean docCourant) {
        this.docCourant = docCourant;
    }

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "candidature_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Candidature candidature;

    public Candidature getCandidature() {
        return candidature;
    }

    public void setCandidature(Candidature candidature) {
        this.candidature = candidature;
    }

}