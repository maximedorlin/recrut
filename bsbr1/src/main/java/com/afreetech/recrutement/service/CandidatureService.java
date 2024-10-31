package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.Candidature;

public interface CandidatureService {
    List<Candidature> getAllCandidatures(String statutActuel);
    Candidature getCandidatureById(long id);
    Candidature createCandidature(Long candidatId, Candidature candidatureRequest);
    Candidature updateCandidature(long id, Candidature candidature);
    void deleteCandidature(long id);
    void deleteAllCandidatures();
    List<Candidature> getAllCandidatures();
}