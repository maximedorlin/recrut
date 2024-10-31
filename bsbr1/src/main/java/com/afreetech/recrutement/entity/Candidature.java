package com.afreetech.recrutement.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rct_candidature")
public class Candidature {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "candidature_generator")
    private long id;

    @Column(name = "date_enregistrement", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEnregistrement;

    @Column(name = "statut_actuel", nullable = false)
    @Enumerated(EnumType.STRING)
    private StatutActuel statutActuel;

    public enum StatutActuel {
        REJETER,
        EN_COUR,
        VALIDER
    }

    public long getId() { return id; }
    
    public Date getDateEnregistrement() {
        return dateEnregistrement;
    }

    public void setDateEnregistrement(Date dateEnregistrement) {
        this.dateEnregistrement = dateEnregistrement;
    }

    public StatutActuel getStatutActuel() {
        return statutActuel;
    }

    public void setStatutActuel(StatutActuel statutActuel) {
        this.statutActuel = statutActuel;
    }




    
    @ManyToOne(fetch = FetchType.LAZY, optional = false )
    @JoinColumn(name = "candidat_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Candidat candidat;

    @ManyToOne(fetch = FetchType.LAZY, optional = false )
    @JoinColumn(name = "offre_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Offre offre;


    public Candidat getCandidat() {
        return candidat;
    }
    
    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }

    public Offre getOffre() {
        return offre;
    }
    
    public void setOffre(Offre offre) {
        this.offre = offre;
    }

    
    @OneToMany(mappedBy = "candidature", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Document> documents = new ArrayList<>();

    public Candidature() {}

    public Candidature(StatutActuel statutActuel, Date dateEnregistrement) {
        this.statutActuel = statutActuel;
        this.dateEnregistrement = dateEnregistrement;
    }

    public List<Document> getDocuments() { return documents; }
    
    public void setDocuments(List<Document> documents) { this.documents = documents; }

    public void addDocument(Document document) {
        documents.add(document);
        document.setCandidature(this);
    }

    public void removeDocument(Document document) {
        documents.remove(document);
        document.setCandidature(null);
    }


    @OneToMany(mappedBy = "candidature", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NoteEval> noteEvals = new ArrayList<>();

    public List<NoteEval> getNoteEvals() {
        return noteEvals;
    }

    public void setNoteEvals(List<NoteEval> noteEvals) {
        this.noteEvals = noteEvals;
    }

    // Méthode pour ajouter un NoteEval à la liste
    public void addNoteEvals(NoteEval noteEval) {
        noteEvals.add(noteEval);
        noteEval.setCandidature(this);  // Assurez-vous que la méthode setEvaluation existe dans NoteEval
    }

    // Méthode pour supprimer un NoteEval de la liste
    public void removeNoteEval(NoteEval noteEval) {
        noteEvals.remove(noteEval);
        noteEval.setCandidature(null); // Assurez-vous que la méthode setEvaluation existe dans NoteEval
    }

    

    @Override
    public String toString() {
        return "candidature [id=" + id + ", dateEnregistrement=" + dateEnregistrement + ", statutActuel=" + statutActuel + "]";
    }
}