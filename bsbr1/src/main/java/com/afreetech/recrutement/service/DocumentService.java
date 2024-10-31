package com.afreetech.recrutement.service;

import java.util.List;

import com.afreetech.recrutement.entity.Document;

public interface DocumentService {
    List<Document> getAllDocumentsByCandidatureId(Long candidatureId);
    Document getDocumentById(Long id);
    Document createDocument(Long candidatureId, Document DocumentRequest);
    Document updateDocument(Long id, Document DocumentRequest);
    void deleteDocument(Long id);
    void deleteAllDocumentsOfCandidature(Long candidatureId);
    List<Document> getAllDocuments();



    
}
