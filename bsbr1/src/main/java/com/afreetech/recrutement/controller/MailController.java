package com.afreetech.recrutement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.Mail;
import com.afreetech.recrutement.service.MailService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/mails")
public class MailController {

    @Autowired
    private MailService mailService;

    
    @GetMapping("/all")
    public ResponseEntity<List<Mail>> getAllMails(){
        try {
            List<Mail> Mails = mailService.getAllMails();
            return new ResponseEntity<>(Mails, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/candidats/{candidatId}")
    public ResponseEntity<List<Mail>> getAllMailsByIdCandidat(@PathVariable(value = "candidatId") Long candidatId) {
        try {
            List<Mail> Mails = mailService.getAllMailsByIdCandidat(candidatId);
            return new ResponseEntity<>(Mails, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mail> getMailsByCandidatId(@PathVariable(value = "id") Long id) {
        try {
            Mail Mail = mailService.getMailById(id);
            return new ResponseEntity<>(Mail, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Mailaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PostMapping("/candidats/{candidatId}")
    public ResponseEntity<Mail> createMail(@PathVariable(value = "candidatId") Long candidatId,
                                                 @RequestBody Mail MailRequest) {
        try {
            Mail createdMail = mailService.createMail(candidatId, MailRequest);
            return new ResponseEntity<>(createdMail, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mail> updateMail(@PathVariable("id") long id,
                                                 @RequestBody Mail MailRequest) {
        try {
            Mail updatedMail = mailService.updateMail(id, MailRequest);
            return new ResponseEntity<>(updatedMail, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Mailaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMail(@PathVariable("id") long id) {
        try {
            mailService.deleteMail(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/candidats/{candidatId}")
    public ResponseEntity<HttpStatus> deleteAllMailsOfCandidat(@PathVariable(value = "candidatId") Long candidatId) {
        try {
            mailService.deleteAllMailsOfIdCandidat(candidatId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}