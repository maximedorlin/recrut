package com.afreetech.recrutement.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Candidat;
import com.afreetech.recrutement.repository.CandidatRepository;

@Service
public class CandidatServiceImpl implements CandidatService {

    @Autowired
    private CandidatRepository candidatRepository;

    @Override
    public List<Candidat> getAllCandidats() {
        return candidatRepository.findAll();
    }

    @Override
    public List<Candidat> getAllCandidats(String userName) {
        List<Candidat> candidats = new ArrayList<>();
        if (userName == null) {
            candidatRepository.findAll().forEach(candidats::add);
        } else {
            candidatRepository.findByUserNameContaining(userName).forEach(candidats::add);
        }
        return candidats;
    }

    @Override
    public Candidat getCandidatById(long id) {
        return candidatRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + id));
    }

    @Override
    public Candidat createCandidat(Candidat candidat) {
        return candidatRepository.save(candidat);
    }

    @Override
    public Candidat updateCandidat(long id, Candidat candidat) {
        Candidat existingCandidat = getCandidatById(id);
        existingCandidat.setUserName(candidat.getUserName());
        existingCandidat.setPrenom(candidat.getPrenom());
        existingCandidat.setEmail(candidat.getEmail());
        return candidatRepository.save(existingCandidat);
    }

    @Override
    public void deleteCandidat(long id) {
        candidatRepository.deleteById(id);
    }

    @Override
    public void deleteAllCandidats() {
        candidatRepository.deleteAll();
    }

}