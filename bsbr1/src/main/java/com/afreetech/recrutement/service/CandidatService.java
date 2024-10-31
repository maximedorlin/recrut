package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.Candidat;

public interface CandidatService {
    List<Candidat> getAllCandidats(String userName);
    Candidat getCandidatById(long id);
    Candidat createCandidat(Candidat candidat);
    Candidat updateCandidat(long id, Candidat candidat);
    void deleteCandidat(long id);
    void deleteAllCandidats();
    List<Candidat> getAllCandidats();
}