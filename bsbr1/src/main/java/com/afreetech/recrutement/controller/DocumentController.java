package com.afreetech.recrutement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.Document;
import com.afreetech.recrutement.service.DocumentService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @GetMapping("/all")
    public ResponseEntity<List<Document>> getAllDocuments(){
        try {
            List<Document> documents = documentService.getAllDocuments();
            return new ResponseEntity<>(documents, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/candidatures/{candidatureId}")
    public ResponseEntity<List<Document>> getAllDocumentsByCandidatureId(@PathVariable(value = "candidatureId") Long candidatureId) {
        try {
            List<Document> documents = documentService.getAllDocumentsByCandidatureId(candidatureId);
            return new ResponseEntity<>(documents, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Document> getDocumentsByCandidatureId(@PathVariable(value = "id") Long id) {
        try {
            Document document = documentService.getDocumentById(id);
            return new ResponseEntity<>(document, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // documentaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PostMapping("/candidatures/{candidatureId}")
    public ResponseEntity<Document> createDocument(@PathVariable(value = "candidatId") Long candidatureId,
                                                 @RequestBody Document documentRequest) {
        try {
            Document createdDocument = documentService.createDocument(candidatureId, documentRequest);
            return new ResponseEntity<>(createdDocument, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Document> updateDocument(@PathVariable("id") long id,
                                                 @RequestBody Document documentRequest) {
        try {
            Document updatedDocument = documentService.updateDocument(id, documentRequest);
            return new ResponseEntity<>(updatedDocument, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // documentaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDocument(@PathVariable("id") long id) {
        try {
            documentService.deleteDocument(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/candidatures/{candidatureId}")
    public ResponseEntity<HttpStatus> deleteAllDocumentsOfCandidature(@PathVariable(value = "candidatureId") Long candidatureId) {
        try {
            documentService.deleteAllDocumentsOfCandidature(candidatureId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}