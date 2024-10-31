package com.afreetech.recrutement.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.afreetech.recrutement.entity.Candidat;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
    List<Candidat> findById(Candidat candidat );
    List<Candidat> findByUserNameContaining(String userName);
}