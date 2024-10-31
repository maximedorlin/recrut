package com.afreetech.recrutement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.exception.ResourceNotFoundException;
// import com.afreetech.recrutement.entity.Candidature;
import com.afreetech.recrutement.entity.NoteEval;
import com.afreetech.recrutement.repository.EvaluationRepository;
import com.afreetech.recrutement.repository.NoteEvlRepository;

@Service
public class NoteEvalServiceImpl implements NoteEvalService {

    @Autowired
    private EvaluationRepository evaluationRepository;

    @Autowired
    private NoteEvlRepository noteEvalRepository;

    @Override
    public List<NoteEval> getAllNoteEvals() {
        return noteEvalRepository.findAll();
    }
    @Override
    public List<NoteEval> getAllNoteEvalByEvaluationId(Long idEvaluation) {
        if (!evaluationRepository.existsById(idEvaluation)) {
            throw new ResourceNotFoundException("Not found Evaluation with id = " + idEvaluation);
        }
        return noteEvalRepository.findByEvaluationId(idEvaluation);
    }

    @Override
    public NoteEval getNoteEvalById(Long id) {
        return noteEvalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found NoteEval with id = " + id));
    }

    @Override
    public NoteEval createNoteEval(Long idEvaluation, NoteEval noteEvalRequest) {
        return evaluationRepository.findById(idEvaluation).map(evaluation -> {
            noteEvalRequest.setEvaluation(evaluation);
            return noteEvalRepository.save(noteEvalRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found Evaluation with id = " + idEvaluation));
    }

    @Override
    public NoteEval updateNoteEval(Long id, NoteEval noteEvalRequest) {
        NoteEval existingNoteEval = getNoteEvalById(id);
        existingNoteEval.setNote(noteEvalRequest.getNote());
        existingNoteEval.setCommentaire(noteEvalRequest.getCommentaire());
        existingNoteEval.setDateEvaluation(noteEvalRequest.getDateEvaluation());
        return noteEvalRepository.save(existingNoteEval);
    }

    @Override
    public void deleteNoteEval(Long id) {
        if (!noteEvalRepository.existsById(id)) {
            throw new ResourceNotFoundException("Not found NoteEval with id = " + id);
        }
        noteEvalRepository.deleteById(id);
    }

    @Override
    public void deleteAllNoteEvalOfEvaluation(Long idEvaluation) {
        if (!evaluationRepository.existsById(idEvaluation)) {
            throw new ResourceNotFoundException("Not found Evaluation with id = " + idEvaluation);
        }
        noteEvalRepository.deleteByEvaluationId(idEvaluation); // Ensure this method exists in your repository
    }
}