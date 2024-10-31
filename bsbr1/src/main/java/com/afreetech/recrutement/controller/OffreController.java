package com.afreetech.recrutement.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.afreetech.recrutement.entity.Offre;
import com.afreetech.recrutement.service.OffreService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api/offres")
public class OffreController {

    @Autowired
    private OffreService offreService;

    @GetMapping("/all")
    public ResponseEntity<List<Offre>> getAllOffres() {
        try {
           List<Offre> offres = offreService.getAllOffres();
           if (offres.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(offres, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

   @GetMapping("/titreOffre/{titreOffre}")
   public ResponseEntity<List<Offre>> getAllOffres(@PathVariable String titreOffre) {
       try {
           List<Offre> offres = offreService.getAllOffres(titreOffre);
           if (offres.isEmpty()) {
               return new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           return new ResponseEntity<>(offres, HttpStatus.OK);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @GetMapping("/{id}")
   public ResponseEntity<Offre> getOffreById(@PathVariable("id") long id) {
       try {
           Offre offre = offreService.getOffreById(id);
           return new ResponseEntity<>(offre, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

    @PostMapping()
    public ResponseEntity<Offre> createOffre(@RequestBody Offre offreRequest) {
        try {
            Offre createOffre = offreService.createOffre(offreRequest);
            return new ResponseEntity<>(createOffre, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

   @PutMapping("/{id}")
   public ResponseEntity<Offre> updateOffre(@PathVariable("id") long id, @RequestBody Offre offre) {
       try {
           Offre updatedOffre = offreService.updateOffre(id, offre);
           return new ResponseEntity<>(updatedOffre, HttpStatus.OK);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<HttpStatus> deleteOffre(@PathVariable("id") long id) {
       try {
           offreService.deleteOffre(id);
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (ResourceNotFoundException e) {
           return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Tutoriel non trouvé
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/all")
   public ResponseEntity<HttpStatus> deleteAllOffres() {
       try {
           offreService.deleteAllOffres();
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       } catch (Exception e) {
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}