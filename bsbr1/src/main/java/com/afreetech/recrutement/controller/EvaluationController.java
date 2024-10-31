package com.afreetech.recrutement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.afreetech.recrutement.entity.Evaluation;
import com.afreetech.recrutement.service.EvaluationService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    @GetMapping("/all")
    public ResponseEntity<List<Evaluation>> getAllEvaluations(){
        try {
           List<Evaluation> Evaluations = evaluationService.getAllEvaluations();
           if (Evaluations.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(Evaluations, HttpStatus.OK);
       } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

   @GetMapping("/titre/{titre}")
   public ResponseEntity<List<Evaluation>> getAllEvaluations(@RequestParam(required = false) String titre) {
       try {
           List<Evaluation> Evaluations = evaluationService.getAllEvaluations(titre);
           if (Evaluations.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(Evaluations, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Evaluation> getEvaluationById(@PathVariable("id") long id) {
       try {
           Evaluation Evaluation = evaluationService.getEvaluationById(id);
           return new ResponseEntity<>(Evaluation, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PostMapping()
   public ResponseEntity<Evaluation> createEvaluation(@RequestBody Evaluation Evaluation) {
       try {
           Evaluation createdEvaluation = evaluationService.createEvaluation(Evaluation);
           return new ResponseEntity<>(createdEvaluation, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PutMapping("/{id}")
   public ResponseEntity<Evaluation> updateEvaluation(@PathVariable("id") long id, @RequestBody Evaluation Evaluation) {
       try {
           Evaluation updatedEvaluation = evaluationService.updateEvaluation(id, Evaluation);
           return new ResponseEntity<>(updatedEvaluation, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> deleteEvaluation(@PathVariable("id") long id) {
       try {
           evaluationService.deleteEvaluation(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/all")
   public ResponseEntity<HttpStatus> deleteAllEvaluations() {
       try {
           evaluationService.deleteAllEvaluations();
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}