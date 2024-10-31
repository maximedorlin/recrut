package com.afreetech.recrutement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Evaluation;
import com.afreetech.recrutement.repository.EvaluationRepository;

@Service
public class EvaluationServiceImpl implements EvaluationService {
    
    @Autowired
    private EvaluationRepository evaluationRepository; // Renamed to camelCase

    @Override
    public List<Evaluation> getAllEvaluations() {
        return evaluationRepository.findAll(); // Renamed to camelCase
    }

    @Override
    public List<Evaluation> getAllEvaluations(String titre) {
        List<Evaluation> evaluations = new ArrayList<>(); // Renamed to camelCase
        if (titre == null || titre.isEmpty()) {
            evaluationRepository.findAll().forEach(evaluations::add);
        } else {
            evaluationRepository.findBytitreContaining(titre).forEach(evaluations::add);
        }
        return evaluations;
    }

    @Override
    public Evaluation getEvaluationById(long id) {
        return evaluationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not found Evaluation with id = " + id));
    }

    @Override
    public Evaluation createEvaluation(Evaluation evaluationRequest) { // Removed unused id parameter
        return evaluationRepository.save(evaluationRequest);
    }

    @Override
    public Evaluation updateEvaluation(long id, Evaluation evaluationRequest) {
        Evaluation existingEvaluation = getEvaluationById(id);
        existingEvaluation.setTitre(evaluationRequest.getTitre());
        existingEvaluation.setDecisionEvaluation(evaluationRequest.getDecisionEvaluation());
        existingEvaluation.setEpreuve(evaluationRequest.getEpreuve());
        return evaluationRepository.save(existingEvaluation);
    }

    @Override
    public void deleteEvaluation(long id) {
        if (!evaluationRepository.existsById(id)) { // Check if exists before deletion
            throw new ResourceNotFoundException("Not found Evaluation with id = " + id);
        }
        evaluationRepository.deleteById(id);
    }

    @Override
    public void deleteAllEvaluations() {
        evaluationRepository.deleteAll();
    }
}