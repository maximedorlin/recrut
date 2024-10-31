package com.afreetech.recrutement.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "rct_offres")
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "offre_generator")
    private long id;

    @Column(name = "titre_job", nullable = false, length = 200)
    private String titreOffre;

    @Column(name = "date_post", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date datePost;

    @Column(name = "fichier_annonce", length = 100)
    private String fichierAnnonce;

    @Column(name = "statut")
    private Boolean statut;

    @Column(name = "type_contrat")
    private String typeContrat;

    @Column(name = "date_limite")
    @Temporal(TemporalType.DATE)
    private Date dateLimite;

    public String getTitreJob() {
        return titreOffre;
    }

    public void setTitreOffre(String titreOffre) {
        this.titreOffre = titreOffre;
    }

    public Date getDatePost() {
        return datePost;
    }

    public void setDatePost(Date datePost) {
        this.datePost = datePost;
    }

    public String getFichierAnnonce() {
        return fichierAnnonce;
    }

    public void setFichierAnnonce(String fichierAnnonce) {
        this.fichierAnnonce = fichierAnnonce;
    }

    public Boolean getStatut() {
        return statut;
    }

    public void setStatut(Boolean statut) {
        this.statut = statut;
    }

    public String getTypeContrat() {
        return typeContrat;
    }

    public void setTypeContrat(String typeContrat) {
        this.typeContrat = typeContrat;
    }

   public Date getDateLimite() {
       return dateLimite;
   }

   public void setDateLimite(Date dateLimite) {
       this.dateLimite = dateLimite;
   }
   
   public List<DomaineComp> getDomaineComp() {
       return domaineComps;
   }

   public void setDomaineComp(List<DomaineComp> domaineComps) {
       this.domaineComps = domaineComps;
   }


   @OneToMany(mappedBy = "offre", cascade = CascadeType.ALL, orphanRemoval = true)
   private List<DomaineComp> domaineComps = new ArrayList<>();

   @OneToMany(mappedBy = "offre", cascade = CascadeType.ALL, orphanRemoval = true)
   private List<Candidature> candidatures = new ArrayList<>();



   public List<DomaineComp> getDomaineComps() { return domaineComps; }
   
   public void setDomaineComps(List<DomaineComp> domaineComps) { this.domaineComps = domaineComps; }

   public void addDomaineComp(DomaineComp domaineComp) {
       domaineComps.add(domaineComp);
       domaineComp.setOffre(this);
   }

   public void removeDomaineComp(DomaineComp domaineComp) {
       domaineComps.remove(domaineComp);
       domaineComp.setOffre(null);
   }

   @Override
   public String toString() {
       return "Offre [id=" + id + ", titreOffre=" + titreOffre + ", datePost=" + datePost + ", fichierAnnonce=" + fichierAnnonce + ", typeContrat=" + typeContrat + ", dateLimite=" + dateLimite + "]";
   }
   
    //Méthodes pour ajouter et supprimer des candidature
    public void addCandidature(Candidature candidature) {
        candidatures.add(candidature);
        candidature.setOffre(this);  // Correction de la méthode appelée
     }
      
       public void removeCandidature(Candidature candidature) {
          candidatures.remove(candidature);
         candidature.setOffre(null);  // Correction de la méthode appelée
     }
}