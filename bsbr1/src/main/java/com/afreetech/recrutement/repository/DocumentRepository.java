package com.afreetech.recrutement.repository;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.afreetech.recrutement.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {
  List<Document> findByCandidatureId(Long candidatureId);
  
  @Transactional
  void deleteByCandidatureId(long candidatureId);
}
