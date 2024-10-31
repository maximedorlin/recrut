package com.afreetech.recrutement.repository;

import com.afreetech.recrutement.entity.NoteEval;

import java.util.List;
import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteEvlRepository extends JpaRepository<NoteEval, Long> {

    List<NoteEval> findByEvaluationId(Long idEvaluation);
  
  @Transactional
  void deleteByEvaluationId(long idEvaluation);
}
