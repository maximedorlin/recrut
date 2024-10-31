package com.afreetech.recrutement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.Competence;
import com.afreetech.recrutement.service.CompetenceService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;
@RestController
@RequestMapping("/api/competences")
public class CompetenceController {

    @Autowired
    private CompetenceService competenceService;

        @GetMapping("/all")
    public ResponseEntity<List<Competence>> getAllCompetences() {
        try {
           List<Competence> competence = competenceService.getAllCompetences();
           return new ResponseEntity<>(competence, HttpStatus.OK);
           } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
           }
    }

    @GetMapping("/domaineComps/{domaineCompId}")
    public ResponseEntity<List<Competence>> getAllCompetencesBydomaineCompId(@PathVariable(value = "domaineCompId") Long domaineCompId) {
        try {
            List<Competence> competences = competenceService.getAllCompetenceByDomaineCompId(domaineCompId);
            return new ResponseEntity<>(competences, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Competence> getCompetencesBydomaineCompId(@PathVariable(value = "id") Long id) {
        try {
            Competence competence = competenceService.getCompetenceById(id);
            return new ResponseEntity<>(competence, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Competenceaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PostMapping("/domaineComps/{domaineCompId}")
    public ResponseEntity<Competence> createCompetence(@PathVariable(value = "domaineCompId") Long domaineCompId,
                                                 @RequestBody Competence competenceRequest) {
        try {
            Competence createdCompetence = competenceService.createCompetence(domaineCompId, competenceRequest);
            return new ResponseEntity<>(createdCompetence, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Competence> updateCompetence(@PathVariable("id") long id,
                                                 @RequestBody Competence competenceRequest) {
        try {
            Competence updatedCompetence = competenceService.updateCompetence(id, competenceRequest);
            return new ResponseEntity<>(updatedCompetence, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Competenceaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCompetence(@PathVariable("id") long id) {
        try {
            competenceService.deleteCompetence(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/candidatures/{domaineCompId}")
    public ResponseEntity<HttpStatus> deleteAllCompetenceOfDomaineCompId(@PathVariable(value = "domaineCompId") Long domaineCompId) {
        try {
            competenceService.deleteAllCompetenceOfDomaineCompId(domaineCompId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}