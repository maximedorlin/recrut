package com.afreetech.recrutement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.JobOffer;
import com.afreetech.recrutement.entity.users.User;

import java.util.List;
@Repository
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {
    List<Candidature> findByUser(User user);
    boolean existsByUserAndJobOffer(User user, JobOffer jobOffer);
}
