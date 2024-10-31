package com.afreetech.recrutement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.DomaineComp;
import com.afreetech.recrutement.service.DomaineCompService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/domaineComps")
public class DomaineCompController {

    @Autowired
    private DomaineCompService domaineCompService;

    @GetMapping("/all")
    public ResponseEntity<List<DomaineComp>> getAllDomaineComps(){
        try {
            List<DomaineComp> domaineComps = domaineCompService.getAllDomaineComps();
            return new ResponseEntity<>(domaineComps, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/offres/{offreId}")
    public ResponseEntity<List<DomaineComp>> getAllDomaineCompsByOffreId(@PathVariable(value = "offreId") Long offreId) {
        try {
            List<DomaineComp> domaineComps = domaineCompService.getAllDomaineCompsByOffreId(offreId);
            return new ResponseEntity<>(domaineComps, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<DomaineComp> getDomaineCompsByOffreId(@PathVariable(value = "id") Long id) {
        try {
            DomaineComp domaineComp = domaineCompService.getDomaineCompById(id);
            return new ResponseEntity<>(domaineComp, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @PostMapping("/offres/{offreId}")
    public ResponseEntity<DomaineComp> createDomaineComp(@PathVariable(value = "offreId") Long OffreId,
                                                 @RequestBody DomaineComp domaineCompRequest) {
        try {
            DomaineComp createdDomaineComp = domaineCompService.createDomaineComp(OffreId, domaineCompRequest);
            return new ResponseEntity<>(createdDomaineComp, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<DomaineComp> updateDomaineComp(@PathVariable("id") long id,
                                                 @RequestBody DomaineComp domaineCompRequest) {
        try {
            DomaineComp updatedDomaineComp = domaineCompService.updateDomaineComp(id, domaineCompRequest);
            return new ResponseEntity<>(updatedDomaineComp, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDomaineComp(@PathVariable("id") long id) {
        try {
            domaineCompService.deleteDomaineComp(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/offres/{offreId}")
    public ResponseEntity<HttpStatus> deleteAllDomaineCompsOfOffre(@PathVariable(value = "offreId") Long offreId) {
        try {
            domaineCompService.deleteAllDomaineCompsOfOffre(offreId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}