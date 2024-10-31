package com.afreetech.recrutement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.afreetech.recrutement.entity.Candidat;
import com.afreetech.recrutement.service.CandidatService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/candidats")
public class CandidatController {

    @Autowired
    private CandidatService candidatService;


    @GetMapping("/all")
    public ResponseEntity<List<Candidat>> getAllCandidats() {
        try {
           List<Candidat> candidats = candidatService.getAllCandidats();
           return new ResponseEntity<>(candidats, HttpStatus.OK);
           } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
           }
    }

   @GetMapping("/userName/{userName}")
   public ResponseEntity<List<Candidat>> getAllCandidats(@RequestParam(required = false) String userName) {
       try {
           List<Candidat> candidats = candidatService.getAllCandidats(userName);
           if (candidats.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(candidats, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Candidat> getCandidatById(@PathVariable("id") long id) {
       try {
           Candidat candidat = candidatService.getCandidatById(id);
           return new ResponseEntity<>(candidat, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PostMapping()
   public ResponseEntity<Candidat> createCandidat(@RequestBody Candidat candidat) {
       try {
           Candidat createdCandidat = candidatService.createCandidat(candidat);
           return new ResponseEntity<>(createdCandidat, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PutMapping("/{id}")
   public ResponseEntity<Candidat> updateCandidat(@PathVariable("id") long id, @RequestBody Candidat candidat) {
       try {
           Candidat updatedCandidat = candidatService.updateCandidat(id, candidat);
           return new ResponseEntity<>(updatedCandidat, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> deleteCandidat(@PathVariable("id") long id) {
       try {
           candidatService.deleteCandidat(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/all")
   public ResponseEntity<HttpStatus> deleteAllCandidats() {
       try {
           candidatService.deleteAllCandidats();
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}