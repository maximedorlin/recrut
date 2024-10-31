package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rct_note_eval")
public class NoteEval {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "NoteEval_generator")
    @Column(name = "id_note_eval")
    private Long id;

    @Column(name = "note", nullable = false)
    private Long note;

    @Column(name = "date_evaluation", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEvaluation;

    @Column(name = "commentaire", nullable = false, columnDefinition = "TEXT")
    private String commentaire;

    // Constructeur par défaut
    public NoteEval() {
        // Constructeur vide
    }

    // Constructeur avec paramètres
    public NoteEval(Long note, Date dateEvaluation, String commentaire, Evaluation evaluation, Candidature candidature) {
        this.note = note;
        this.dateEvaluation = dateEvaluation;
        this.commentaire = commentaire;
        this.evaluation = evaluation;
        this.candidature = candidature;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNote() {
        return note;
    }

    public void setNote(Long note) {
        this.note = note;
    }

    public Date getDateEvaluation() {
        return dateEvaluation;
    }

    public void setDateEvaluation(Date dateEvaluation) {
        this.dateEvaluation = dateEvaluation;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }



    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "fk_id_evaluation", nullable = false)
    @JsonIgnore
    private Evaluation evaluation;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "fk_id_cand", nullable = false)
    @JsonIgnore
    private Candidature candidature;

    public Evaluation getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(Evaluation evaluation) {
        this.evaluation = evaluation;
    }

    public Candidature getcandidature() {
        return candidature;
    }

    public void setCandidature(Candidature candidature) {
        this.candidature = candidature;
    }
}