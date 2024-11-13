package com.afreetech.recrutement.entity.DTO;

import lombok.Data;
import java.util.List;

import com.afreetech.recrutement.entity.QuestionResponse;

@Data
public class ApplicationDto {
    private Long jobOfferId; // ID de l'offre d'emploi
    private List<QuestionResponse> responses; // Réponses aux questions
    private String cv; // CV au format PDF (peut être en base64 ou URL)
    private List<String> diplomas; // Liste des diplômes
    private List<String> certifications; // Liste des certifications
    private String coverLetter; // Lettre de motivation
}