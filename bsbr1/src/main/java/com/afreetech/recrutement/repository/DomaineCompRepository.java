package com.afreetech.recrutement.repository;

import java.util.List;

//import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.afreetech.recrutement.entity.DomaineComp;

public interface DomaineCompRepository extends JpaRepository<DomaineComp, Long> {
  //@Transactional
  //void deleteBydomaineCompId(long offreId);

  List<DomaineComp> findByOffreId(Long offreId);
}
