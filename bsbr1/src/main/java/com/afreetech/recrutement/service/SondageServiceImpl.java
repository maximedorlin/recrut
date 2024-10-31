package com.afreetech.recrutement.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Sondage;
import com.afreetech.recrutement.repository.SondageRepository;

@Service
public class SondageServiceImpl implements SondageService {

    @Autowired
    private SondageRepository sondageRepository;

    @Override
    public List<Sondage> getAllSondages() {
        return sondageRepository.findAll();
    }

    @Override
    public List<Sondage> getAllSondages(String titre) {
        List<Sondage> sondages = new ArrayList<>();
        if (titre == null) {
            sondageRepository.findAll().forEach(sondages::add);
        } else {
            sondageRepository.findByTitreContaining(titre).forEach(sondages::add);
        }
        return sondages;
    }

    @Override
    public Sondage getSondageById(long id) {
        return sondageRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not found Sondage with id = " + id));
    }

    @Override
    public Sondage createSondage(Sondage Sondage) {
        return sondageRepository.save(Sondage);
    }

    @Override
    public Sondage updateSondage(long id, Sondage sondage) {
        Sondage existingSondage = getSondageById(id);
        existingSondage.setTitre(sondage.getTitre());
        existingSondage.setQuestion(sondage.getQuestion());
        existingSondage.setReponce(sondage.getReponce());
        return sondageRepository.save(existingSondage);
    }

    @Override
    public void deleteSondage(long id) {
        sondageRepository.deleteById(id);
    }

    @Override
    public void deleteAllSondages() {
        sondageRepository.deleteAll();
    }

}