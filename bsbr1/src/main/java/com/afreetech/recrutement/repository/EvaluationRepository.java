package com.afreetech.recrutement.repository;

import com.afreetech.recrutement.entity.Evaluation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
  //List<Evaluation> findByUserId(Long idUser);
  
 // @Transactional
 // void deleteByUserId(long idUser);

  //List<Evaluation> findByIdUser(Long idUser);

  List<Evaluation> findById(Evaluation evaluation );
    List<Evaluation> findBytitreContaining(String titre);
}
