package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.QuestionResponse;
import com.afreetech.recrutement.entity.users.User;

public interface CandidatureService {
    Candidature applyToJobOffer(Long jobOfferId, User user, List<QuestionResponse> responses);
    List<Candidature> getApplicationsByUser(User user);
}