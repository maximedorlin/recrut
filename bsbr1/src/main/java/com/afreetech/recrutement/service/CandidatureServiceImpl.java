package com.afreetech.recrutement.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.repository.CandidatRepository;
import com.afreetech.recrutement.repository.CandidatureRepository;

@Service
public class CandidatureServiceImpl implements CandidatureService {
    
    @Autowired
    private CandidatureRepository candidatureRepository;

    private CandidatRepository candidatRepository;

      @Override
    public List<Candidature> getAllCandidatures() {
        return candidatureRepository.findAll();
    }

    @Override
    public List<Candidature> getAllCandidatures(String statutActuel) {
        List<Candidature> candidatures = new ArrayList<>();
        if (statutActuel == null) {
            candidatureRepository.findAll().forEach(candidatures::add);
        } else {
            candidatureRepository.findByStatutActuelContaining(statutActuel).forEach(candidatures::add);
        }
        return candidatures;
    }

    @Override
    public Candidature getCandidatureById(long id) {
        return candidatureRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + id));
    }

    @Override
    public Candidature createCandidature(Long candidatId, Candidature candidatureRequest) {
        return candidatRepository.findById(candidatId).map(candidat -> {
            candidatureRequest.setCandidat(candidat);
            return candidatureRepository.save(candidatureRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + candidatId));
    }

    @Override
    public Candidature updateCandidature(long id, Candidature candidature) {
        Candidature existingCandidature = getCandidatureById(id);
        existingCandidature.setStatutActuel(candidature.getStatutActuel());
        existingCandidature.setDateEnregistrement(candidature.getDateEnregistrement());
        return candidatureRepository.save(existingCandidature);
    }

    @Override
    public void deleteCandidature(long id) {
        candidatureRepository.deleteById(id);
    }

    @Override
    public void deleteAllCandidatures() {
        candidatureRepository.deleteAll();
    }

}