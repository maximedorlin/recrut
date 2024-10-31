package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.Offre;

public interface OffreService {
    List<Offre> getAllOffres(String titreOffre);
    Offre getOffreById(long id);
    Offre updateOffre(long id, Offre offre);
    void deleteOffre(long id);
    void deleteAllOffres();
    Offre createOffre(Offre offreRequest);
    List<Offre> getAllOffres();
}