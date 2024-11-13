package com.afreetech.recrutement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.afreetech.recrutement.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}