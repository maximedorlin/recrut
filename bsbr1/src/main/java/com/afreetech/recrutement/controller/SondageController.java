package com.afreetech.recrutement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.afreetech.recrutement.entity.Sondage;
import com.afreetech.recrutement.service.SondageService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api/sondages")
public class SondageController {

    @Autowired
    private SondageService SondageService;

    @GetMapping("/all")
   public ResponseEntity<List<Sondage>> getAllSondages() {
    try {
           List<Sondage> Sondages = SondageService.getAllSondages();
           if (Sondages.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(Sondages, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/titre/{titre}")
//    public ResponseEntity<List<Sondage>> getAllSondages(@RequestParam(required = false) String titre) {
    public ResponseEntity<List<Sondage>> getAllSondages(@PathVariable String titre) {
       try {
           List<Sondage> Sondages = SondageService.getAllSondages(titre);
           if (Sondages.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(Sondages, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Sondage> getSondageById(@PathVariable("id") long id) {
       try {
           Sondage Sondage = SondageService.getSondageById(id);
           return new ResponseEntity<>(Sondage, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PostMapping()
   public ResponseEntity<Sondage> createSondage(@RequestBody Sondage Sondage) {
       try {
           Sondage createdSondage = SondageService.createSondage(Sondage);
           return new ResponseEntity<>(createdSondage, HttpStatus.CREATED);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @PutMapping("/{id}")
   public ResponseEntity<Sondage> updateSondage(@PathVariable("id") long id, @RequestBody Sondage Sondage) {
       try {
           Sondage updatedSondage = SondageService.updateSondage(id, Sondage);
           return new ResponseEntity<>(updatedSondage, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> deleteSondage(@PathVariable("id") long id) {
       try {
           SondageService.deleteSondage(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/all")
   public ResponseEntity<HttpStatus> deleteAllSondages() {
       try {
           SondageService.deleteAllSondages();
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}