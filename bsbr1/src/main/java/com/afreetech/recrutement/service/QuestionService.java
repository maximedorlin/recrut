package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.Question;

public interface QuestionService {
    List<Question> getAllQuestions();
    Question getQuestionById(Long id);
    Question createQuestion(Question question);
    Question updateQuestion(Long id, Question question);
    void deleteQuestion(Long id);
}