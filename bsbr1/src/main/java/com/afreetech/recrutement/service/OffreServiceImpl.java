package com.afreetech.recrutement.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Offre;
import com.afreetech.recrutement.repository.OffreRepository;

@Service
public class OffreServiceImpl implements OffreService {
    
    @Autowired
    private OffreRepository offreRepository;


    @Override
    public List<Offre> getAllOffres() {
        return offreRepository.findAll();
    }
    
    @Override
    public List<Offre> getAllOffres(String titreOffre) {
        List<Offre> offres = new ArrayList<>();
        if (titreOffre == null) {
            offreRepository.findAll().forEach(offres::add);
        } else {
            offreRepository.findByTitreOffreContaining(titreOffre).forEach(offres::add);
        }
        return offres;
    }

    @Override
    public Offre getOffreById(long id) {
        return offreRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + id));
    }

    @Override
    public Offre createOffre( Offre offreRequest) {
        return offreRepository.save(offreRequest);
    }


    @Override
    public Offre updateOffre(long id, Offre offre) {
        Offre existingOffre = getOffreById(id);
        existingOffre.setTitreOffre(offre.getTitreJob());
        existingOffre.setDateLimite(offre.getDateLimite());
        existingOffre.setDatePost(offre.getDatePost());
        existingOffre.setFichierAnnonce(offre.getFichierAnnonce());
        existingOffre.setTypeContrat(offre.getTypeContrat());
        return offreRepository.save(existingOffre);
    }

    @Override
    public void deleteOffre(long id) {
        offreRepository.deleteById(id);
    }

    @Override
    public void deleteAllOffres() {
        offreRepository.deleteAll();
    }

    // @Override
    // public Offre createOffre(Long offreId, Offre offreRequest) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'createOffre'");
    // }

}