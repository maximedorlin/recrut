package com.afreetech.recrutement.service;

import java.lang.module.ResolutionException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.entity.DomaineComp;
import com.afreetech.recrutement.repository.DomaineCompRepository;
import com.afreetech.recrutement.repository.JobOfferRepository;

@Service
public class DomaineCompServiceImpl implements DomaineCompService {

    @Autowired
    private JobOfferRepository offreRepository;

    @Autowired
    private DomaineCompRepository domaineCompRepository;

      @Override
    public List<DomaineComp> getAllDomaineComps() {
        return domaineCompRepository.findAll();
    }

    @Override
    public List<DomaineComp> getAllDomaineCompsByOffreId(Long offreId) {
        if (!offreRepository.existsById(offreId)) {
            throw new ResolutionException("Not found Offre with id = " + offreId);
        }
        return domaineCompRepository.findByOffreId(offreId);
    }

    @Override
    public DomaineComp getDomaineCompById(Long id) {
        return domaineCompRepository.findById(id)
                .orElseThrow(() -> new ResolutionException("Not found domaineComp with id = " + id));
    }

    @Override
    public DomaineComp createDomaineComp(Long offreId, DomaineComp domaineCompRequest) {
        return offreRepository.findById(offreId).map(offre -> {
            domaineCompRequest.setOffre(offre);
            return domaineCompRepository.save(domaineCompRequest);
        }).orElseThrow(() -> new ResolutionException("Not found candidat with id = " + offreId));
    }

    @Override
    public DomaineComp updateDomaineComp(Long id, DomaineComp domaineCompRequest) {
        DomaineComp domaineComp = getDomaineCompById(id);
        domaineComp.setNomType(domaineCompRequest.getNomType());
        return domaineCompRepository.save(domaineComp);
    }

    @Override
    public void deleteDomaineComp(Long id) {
        domaineCompRepository.deleteById(id);
    }

    @Override
    public void deleteAllDomaineCompsOfOffre(Long offreId) {
        if (!offreRepository.existsById(offreId)) {
            throw new ResolutionException("Not found Offre with id = " + offreId);
        }
        domaineCompRepository.findByOffreId(offreId);
    }
}
