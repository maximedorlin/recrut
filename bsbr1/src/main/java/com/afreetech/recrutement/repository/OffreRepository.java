package com.afreetech.recrutement.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.afreetech.recrutement.entity.Offre;

public interface OffreRepository extends JpaRepository<Offre, Long> {
    List<Offre> findById(Offre offre );
    List<Offre> findByTitreOffreContaining(String titreOffre);
}