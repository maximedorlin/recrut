package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.Evaluation;

public interface EvaluationService {
    List<Evaluation> getAllEvaluations(String titre);
    Evaluation getEvaluationById(long id);
    Evaluation createEvaluation(Evaluation evaluationRequest);
    Evaluation updateEvaluation(long id, Evaluation evaluationRequest);
    void deleteEvaluation(long id);
    void deleteAllEvaluations();
    List<Evaluation> getAllEvaluations();
}