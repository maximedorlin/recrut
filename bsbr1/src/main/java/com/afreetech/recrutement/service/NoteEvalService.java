package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.NoteEval;

public interface NoteEvalService {
    List<NoteEval> getAllNoteEvalByEvaluationId(Long idEvaluation);
    NoteEval getNoteEvalById(Long id);
    NoteEval createNoteEval(Long idEvaluation, NoteEval noteEvalRequest);
    NoteEval updateNoteEval(Long id, NoteEval noteEvalRequest);
    void deleteNoteEval(Long id);
    void deleteAllNoteEvalOfEvaluation(Long idEvaluation);
    List<NoteEval> getAllNoteEvals();



    
}
