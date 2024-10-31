package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rct_candidat")
public class Candidat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "candidat_generator")
    private long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "nom_user", nullable = false)
    private String userName;

    @Column(name = "prenom_user", nullable = false)
    private String prenom;

    @Column(name = "nomero_tel", nullable = false)
    private String numero;

    @Column(name = "password", nullable = false)
    private String password;

    public Candidat() {}

    public Candidat(String email, String userName, String prenom, String numero, String password) {
        this.email = email;
        this.userName = userName;
        this.prenom =  prenom;
        this.numero = numero;
        this.password =  password;
    }

    // Getters and Setters
   

    public Long getId() { return id; }
    
    public String getUserName() { return userName; }
    
    public void setUserName(String userName) { this.userName = userName; }
    
    public String getEmail() { return email; }
    
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    
    public void setPassword(String password) { this.password = password; }
    
    public String getNumero() { return numero; }
    
    public void setNumero(String numero) { this.numero = numero; }
    
    public String getPrenom() { return prenom; }
    
    public void setPrenom(String prenom) { this.prenom = prenom; }


    
    @OneToMany(mappedBy = "candidat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Candidature> candidatures = new ArrayList<>();
    
    public List<Candidature> getCandidatures() { return candidatures; }
    
    public void setCandidatures(List<Candidature> candidatures) { this.candidatures = candidatures; }

    public void addCandidature(Candidature candidature) {
        candidatures.add(candidature);
        candidature.setCandidat(this);
    }

    public void removeCandidature(Candidature candidature) {
        candidatures.remove(candidature);
        candidature.setCandidat(null);
    }



    

    @OneToMany(mappedBy = "candidat", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mail> mails = new ArrayList<>();

    public List<Mail> getMails() {
        return mails;
    }

    public void setMails(List<Mail> mails) {
        this.mails = mails;
    }

    // Méthode pour ajouter un NoteEval à la liste
    public void addMail(Mail mail) {
        mails.add(mail);
        mail.setCandidat(this);  // Assurez-vous que la méthode setEvaluation existe dans mail
    }

    // Méthode pour supprimer un mail de la liste
    public void removeMail(Mail mail) {
        mails.remove(mail);
        mail.setCandidat(null);  // Assurez-vous que la méthode setEvaluation existe dans mail
    }

    @Override
    public String toString() {
        return "candidat [id=" + id + ", userName=" + userName + ", prenom=" + prenom + ", email=" + email + ", numero=" + numero + ", passwork=" + password + "]";
    }
}