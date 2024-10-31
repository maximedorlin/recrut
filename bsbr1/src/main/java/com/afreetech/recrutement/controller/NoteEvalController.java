package com.afreetech.recrutement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.afreetech.recrutement.entity.NoteEval;
import com.afreetech.recrutement.service.NoteEvalService;
import com.afreetech.recrutement.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/noteEvals")
public class NoteEvalController {

    @Autowired
    private NoteEvalService noteEvalService;

    @GetMapping("/all")
    public ResponseEntity<List<NoteEval>> getAllNoteEvals() {
        try {
            List<NoteEval> NoteEvals = noteEvalService.getAllNoteEvals();
            return new ResponseEntity<>(NoteEvals, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/evalaution/{idEvalaution}")
    public ResponseEntity<List<NoteEval>> getAllNoteEvalByEvaluationId(@PathVariable(value = "idEvalaution") Long idEvalaution) {
        try {
            List<NoteEval> NoteEvals = noteEvalService.getAllNoteEvalByEvaluationId(idEvalaution);
            return new ResponseEntity<>(NoteEvals, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteEval> getNoteEvalsByidEvalaution(@PathVariable(value = "id") Long id) {
        try {
            NoteEval NoteEval = noteEvalService.getNoteEvalById(id);
            return new ResponseEntity<>(NoteEval, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // NoteEvalaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }

    @PostMapping("/evalaution/{idEvalaution}")
    public ResponseEntity<NoteEval> createNoteEval(@PathVariable(value = "idEvalaution") Long idEvalaution,
                                                 @RequestBody NoteEval NoteEvalRequest) {
        try {
            NoteEval createdNoteEval = noteEvalService.createNoteEval(idEvalaution, NoteEvalRequest);
            return new ResponseEntity<>(createdNoteEval, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Erreur interne du serveur
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<NoteEval> updateNoteEval(@PathVariable("id") long id,
                                                 @RequestBody NoteEval NoteEvalRequest) {
        try {
            NoteEval updatedNoteEval = noteEvalService.updateNoteEval(id, NoteEvalRequest);
            return new ResponseEntity<>(updatedNoteEval, HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // NoteEvalaire non trouvé
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteNoteEval(@PathVariable("id") long id) {
        try {
            noteEvalService.deleteNoteEval(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/evalaution/{idEvalaution}")
    public ResponseEntity<HttpStatus> deleteAllNoteEvalOfEvaluation(@PathVariable(value = "idEvalaution") Long idEvalaution) {
        try {
            noteEvalService.deleteAllNoteEvalOfEvaluation(idEvalaution);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}