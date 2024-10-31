package com.afreetech.recrutement.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.afreetech.recrutement.entity.Sondage;

public interface SondageRepository extends JpaRepository<Sondage, Long> {
    List<Sondage> findById(Sondage Sondage );
    List<Sondage> findByTitreContaining(String titre);
}