package com.afreetech.recrutement.entity;

import lombok.Data;

import java.util.List;

@Data
public class ApplicationRequest {
    private Long jobOfferId;
    private List<QuestionResponse> responses;
}