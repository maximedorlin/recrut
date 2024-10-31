package com.afreetech.recrutement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Document;
import com.afreetech.recrutement.repository.DocumentRepository;
import com.afreetech.recrutement.repository.CandidatureRepository;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private CandidatureRepository candidatureRepository;

    @Autowired
    private DocumentRepository documentRepository;


    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public List<Document> getAllDocumentsByCandidatureId(Long candidatureId) {
        if (!candidatureRepository.existsById(candidatureId)) {
            throw new ResourceNotFoundException("Not found candidature with id = " + candidatureId);
        }
        return documentRepository.findByCandidatureId(candidatureId);
    }

    @Override
    public Document getDocumentById(Long id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found document with id = " + id));
    }

    @Override
    public Document createDocument(Long candidatureId, Document documentRequest) {
        return candidatureRepository.findById(candidatureId).map(candidature -> {
            documentRequest.setCandidature(candidature);
            return documentRepository.save(documentRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + candidatureId));
    }

    @Override
    public Document updateDocument(Long id, Document documentRequest) {
        Document document = getDocumentById(id);
        document.setAnneeObtention(documentRequest.getAnneeObtention());
        document.setTitreDoc(documentRequest.getTitreDoc());
        document.setEtablissementObtention(documentRequest.getEtablissementObtention());
        document.setMention(documentRequest.getMention());
        document.setDocCourant(documentRequest.getDocCourant());
        return documentRepository.save(document);
    }

    @Override
    public void deleteDocument(Long id) {
        documentRepository.deleteById(id);
    }

    @Override
    public void deleteAllDocumentsOfCandidature(Long candidatureId) {
        if (!candidatureRepository.existsById(candidatureId)) {
            throw new ResourceNotFoundException("Not found candidature with id = " + candidatureId);
        }
        documentRepository.deleteByCandidatureId(candidatureId);
    }
}
