package com.afreetech.recrutement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.afreetech.recrutement.entity.QuestionResponse;

@Repository
public interface QuestionResponseRepository extends JpaRepository<QuestionResponse, Long> {
    // Méthodes supplémentaires si nécessaire
}