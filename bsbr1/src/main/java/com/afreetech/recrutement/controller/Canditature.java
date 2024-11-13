package com.afreetech.recrutement.controller;

import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.QuestionResponse;
import com.afreetech.recrutement.entity.users.User;
import com.afreetech.recrutement.service.CandidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class Canditature {

    @Autowired
    private CandidatureService applicationService;

//    @PostMapping
//    public ResponseEntity<Application> applyToJobOffer(@RequestParam Long jobOfferId,
//                                                       @AuthenticationPrincipal User user,
//                                                       @RequestBody(required = false) List<QuestionResponse> responses) {
//        Application application = applicationService.applyToJobOffer(jobOfferId, user, responses);
//        return new ResponseEntity<>(application, HttpStatus.CREATED);
//    }


    @PostMapping
    public ResponseEntity<Candidature> applyToJobOffer(
            @RequestParam Long jobOfferId,
            @AuthenticationPrincipal User user,
            @RequestBody List<QuestionResponse> responses) { // Attendez une liste directement
        Candidature application = applicationService.applyToJobOffer(jobOfferId, user, responses);
        return new ResponseEntity<>(application, HttpStatus.CREATED);
    }


    @GetMapping("/user")
    public ResponseEntity<List<Candidature>> getUserApplications(@AuthenticationPrincipal User user) {
        List<Candidature> applications = applicationService.getApplicationsByUser(user);
        return ResponseEntity.ok(applications);
    }
}
