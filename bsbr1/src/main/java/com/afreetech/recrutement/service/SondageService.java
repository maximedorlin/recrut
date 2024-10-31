package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.Sondage;

public interface SondageService {
    List<Sondage> getAllSondages(String titre);
    Sondage getSondageById(long id);
    Sondage createSondage(Sondage Sondage);
    Sondage updateSondage(long id, Sondage Sondage);
    void deleteSondage(long id);
    void deleteAllSondages();
    List<Sondage> getAllSondages();

}