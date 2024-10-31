package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rct_evaluation")
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "evaluation_generator")
    @Column(name = "id_evaluation")
    private Long id;

    @Column(name = "titre", nullable = false)
    private String titre;

    @Column(name = "epreuve", nullable = false)
    private String epreuve;

    @Column(name = "decision_evaluation", nullable = false)
    private String decisionEvaluation;



    // Constructeur par défaut
    public Evaluation() {
        // Constructeur vide
    }

    // Constructeur avec paramètres
    public Evaluation(String titre, String epreuve, String decisionEvaluation) {
        this.titre = titre;
        this.epreuve = epreuve;
        this.decisionEvaluation = decisionEvaluation;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getEpreuve() {
        return epreuve;
    }

    public void setEpreuve(String epreuve) {
        this.epreuve = epreuve;
    }

    public String getDecisionEvaluation() {
        return decisionEvaluation;
    }

    public void setDecisionEvaluation(String decisionEvaluation) {
        this.decisionEvaluation = decisionEvaluation;
    }



    @OneToMany(mappedBy = "evaluation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NoteEval> noteEvals = new ArrayList<>();

    public List<NoteEval> getNoteEvals() {
        return noteEvals;
    }

    public void setNoteEvals(List<NoteEval> noteEvals) {
        this.noteEvals = noteEvals;
    }

    // Méthode pour ajouter un NoteEval à la liste
    public void addNoteEval(NoteEval noteEval) {
        noteEvals.add(noteEval);
        noteEval.setEvaluation(this);  // Assurez-vous que la méthode setEvaluation existe dans NoteEval
    }

    // Méthode pour supprimer un NoteEval de la liste
    public void removeNoteEval(NoteEval noteEval) {
        noteEvals.remove(noteEval);
        noteEval.setEvaluation(null);  // Assurez-vous que la méthode setEvaluation existe dans NoteEval
    }
}