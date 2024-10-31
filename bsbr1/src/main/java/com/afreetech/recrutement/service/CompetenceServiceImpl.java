package com.afreetech.recrutement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Competence;
import com.afreetech.recrutement.repository.CompetenceRepository;
import com.afreetech.recrutement.repository.DomaineCompRepository;

@Service
public class CompetenceServiceImpl implements CompetenceService {

    @Autowired
    private DomaineCompRepository domaineCompRepository;

    @Autowired
    private CompetenceRepository competenceRepository;


          @Override
    public List<Competence> getAllCompetences() {
        return competenceRepository.findAll();
    }

    @Override
    public List<Competence> getAllCompetenceByDomaineCompId(Long domaineCompId) {
        if (!domaineCompRepository.existsById(domaineCompId)) {
            throw new ResourceNotFoundException("Not found DomaineComp with id = " + domaineCompId);
        }
        return competenceRepository.findByDomaineCompId(domaineCompId);
    }

    @Override
    public Competence getCompetenceById(Long id) {
        return competenceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Competence with id = " + id));
    }

    @Override
    public Competence createCompetence(Long domaineCompId, Competence competenceRequest) {
        return domaineCompRepository.findById(domaineCompId).map(domaineComp -> {
            competenceRequest.setDomaineComp(domaineComp); 
            return competenceRepository.save(competenceRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + domaineCompId));
    }

    @Override
    public Competence updateCompetence(Long id, Competence competenceRequest) {
        Competence competence = getCompetenceById(id);
        competence.setTitre(competenceRequest.getTitre());
        competence.setDescription(competenceRequest.getDescription());
        return competenceRepository.save(competence);
    }

    @Override
    public void deleteCompetence(Long id) {
        competenceRepository.deleteById(id);
    }

    @Override
    public void deleteAllCompetenceOfDomaineCompId(Long domaineCompId) {
        if (!domaineCompRepository.existsById(domaineCompId)) {
            throw new ResourceNotFoundException("Not found DomaineComp with id = " + domaineCompId);
        }
        competenceRepository.findByDomaineCompId(domaineCompId);
    }
}
