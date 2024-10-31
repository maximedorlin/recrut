package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.DomaineComp;

public interface DomaineCompService {
    List<DomaineComp> getAllDomaineCompsByOffreId(Long offreId);
    DomaineComp getDomaineCompById(Long id);
    DomaineComp createDomaineComp(Long offreId, DomaineComp domaineCompRequest);
    DomaineComp updateDomaineComp(Long id, DomaineComp domaineCompRequest);
    void deleteDomaineComp(Long id);
    void deleteAllDomaineCompsOfOffre(Long offreId);
     List<DomaineComp> getAllDomaineComps();
}
