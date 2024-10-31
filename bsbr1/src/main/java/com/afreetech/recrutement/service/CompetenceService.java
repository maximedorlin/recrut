package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.Competence;

public interface CompetenceService {
    List<Competence> getAllCompetenceByDomaineCompId(Long domaineCompId);
    Competence getCompetenceById(Long id);
    Competence createCompetence(Long domaineCompId, Competence competenceRequest);
    Competence updateCompetence(Long id, Competence competencequest);
    void deleteCompetence(Long id);
    void deleteAllCompetenceOfDomaineCompId(Long domaineCompId);
    List<Competence> getAllCompetences();

}

    