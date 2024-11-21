package com.afreetech.recrutement.service;

import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.JobOffer;
import com.afreetech.recrutement.entity.Question;
import com.afreetech.recrutement.entity.QuestionResponse;
import com.afreetech.recrutement.entity.users.User;
import com.afreetech.recrutement.repository.CandidatureRepository;
import com.afreetech.recrutement.repository.JobOfferRepository;
import com.afreetech.recrutement.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatureServiceImpl implements CandidatureService {

    @Autowired
    private CandidatureRepository applicationRepository; // Repository pour Application
    @Autowired
    private JobOfferRepository jobOfferRepository; // Repository pour JobOffer
    @Autowired
    private QuestionService questionService; // Service pour obtenir des questions

    @Autowired
    private QuestionRepository questionRepository;

//    @Override
//    public Application applyToJobOffer(Long jobOfferId, User user, List<QuestionResponse> responses) {
//        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId)
//                .orElseThrow(() -> new RuntimeException("Offre d'emploi non trouvée"));
//
//        Application application = new Application();
//        application.setJobOffer(jobOffer);
//        application.setUser(user);
//
//        if (responses != null && !responses.isEmpty()) {
//            double score = calculateScore(responses);
//            application.setScore(score);
//            application.setQuestionResponses(responses);
//        }
//
//        return applicationRepository.save(application);
//    }
    @Override
    public Candidature applyToJobOffer(Long jobOfferId, User user, List<QuestionResponse> responses) {
        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Offre d'emploi non trouvée"));

        // Vérifiez si l'utilisateur a déjà candidaté à cette offre
        boolean alreadyApplied = applicationRepository.existsByUserAndJobOffer(user, jobOffer);
        if (alreadyApplied) {
            throw new IllegalStateException("Vous avez déjà candidaté à cette offre.");
        }

        Candidature application = new Candidature();
        application.setJobOffer(jobOffer);
        application.setUser(user);

        if (responses != null && !responses.isEmpty()) {
            for (QuestionResponse response : responses) {
                // Assurez-vous de récupérer la question de la base de données
                Question question = questionRepository.findById(response.getQuestion().getId())
                        .orElseThrow(() -> new RuntimeException("Question non trouvée"));
                response.setQuestion(question);
                response.setApplication(application); // Lier la réponse à l'application
            }

            double score = calculateScore(responses);
            application.setScore(score);
            application.setQuestionResponses(responses);
        }

        return applicationRepository.save(application);
    }





    private double calculateScore(List<QuestionResponse> responses) {
        int totalQuestions = responses.size();
        int correctAnswers = 0;

        for (QuestionResponse response : responses) {
            Question question = response.getQuestion();
            String correctAnswer = question.getReponseCorrecte();

            // Vérifiez si la réponse correcte est non nulle avant de faire la comparaison
            if (correctAnswer != null && correctAnswer.equals(response.getResponse())) {
                correctAnswers++;
            }
        }

        return (totalQuestions > 0) ? (double) correctAnswers / totalQuestions * 100 : 0; // Évitez la division par zéro
    }

    @Override
    public List<Candidature> getApplicationsByUser(User user) {
        return applicationRepository.findByUser(user);
    }
}

