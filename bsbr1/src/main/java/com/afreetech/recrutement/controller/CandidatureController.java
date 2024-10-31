package com.afreetech.recrutement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.service.CandidatureService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/candidatures")
public class CandidatureController {

    @Autowired
    private CandidatureService candidatureService;


        @GetMapping("/all")
    public ResponseEntity<List<Candidature>> getAllCandidatures() {
        try {
           List<Candidature> candidatures = candidatureService.getAllCandidatures();
           return new ResponseEntity<>(candidatures, HttpStatus.OK);
           } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
           }
    }

   @GetMapping("/statutActuel/{statutActuel}")
   public ResponseEntity<List<Candidature>> getAllCandidatures(@RequestParam(required = false) String statutActuel) {
       try {
           List<Candidature> candidatures = candidatureService.getAllCandidatures(statutActuel);
           if (candidatures.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(candidatures, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Candidature> getCandidatureById(@PathVariable("id") long id) {
       try {
           Candidature candidature = candidatureService.getCandidatureById(id);
           return new ResponseEntity<>(candidature, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

    @PostMapping("/candidats/{candidatId}")
    public ResponseEntity<Candidature> createCandidature(@PathVariable(value = "candidatId") Long candidatId,
                                                 @RequestBody Candidature candidatureRequest) {
        try {
            Candidature createCandidature = candidatureService.createCandidature(candidatId, candidatureRequest);
            return new ResponseEntity<>(createCandidature, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @PutMapping("/{id}")
   public ResponseEntity<Candidature> updateCandidature(@PathVariable("id") long id, @RequestBody Candidature candidature) {
       try {
           Candidature updatedCandidature = candidatureService.updateCandidature(id, candidature);
           return new ResponseEntity<>(updatedCandidature, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> deleteCandidature(@PathVariable("id") long id) {
       try {
           candidatureService.deleteCandidature(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/all")
   public ResponseEntity<HttpStatus> deleteAllCandidatures() {
       try {
           candidatureService.deleteAllCandidatures();
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}