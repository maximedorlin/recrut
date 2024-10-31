package com.afreetech.recrutement.repository;

import com.afreetech.recrutement.entity.Competence;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetenceRepository extends JpaRepository<Competence, Long> {
    //List<Competence> findByDomaineCompId(Long domaineCompId);

    @Query("SELECT c FROM Competence c WHERE c.domaineComp.id = :domaineCompId")
    List<Competence> findByDomaineCompId(@Param("domaineCompId") Long domaineCompId);
    // List<Competence> findByDomaineCompId(Long domaineCompId);
   @Transactional
    void deleteByDomaineCompId(long domaineCompId);
}