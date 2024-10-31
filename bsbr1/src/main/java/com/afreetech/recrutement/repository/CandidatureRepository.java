package com.afreetech.recrutement.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.Document;

//import jakarta.transaction.Transactional;

public interface CandidatureRepository extends JpaRepository<Candidature, Long> {
    List<Candidature> findById(Candidature candidature );
    List<Candidature> findByStatutActuelContaining(String statutActuel);



    
    List<Document> findByCandidatId(Long candidatId);
  
    //@Transactional
    //void deleteByCandidatId(long candidatId);
}