package com.afreetech.recrutement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.afreetech.recrutement.exception.ResourceNotFoundException;
import com.afreetech.recrutement.entity.Mail;
import com.afreetech.recrutement.repository.MailRepository;
import com.afreetech.recrutement.repository.CandidatRepository;

@Service
public class MailServiceImpl implements MailService {

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private MailRepository mailRepository;


    @Override
    public List<Mail> getAllMails() {
        return mailRepository.findAll();
    }
    
    @Override
    public List<Mail> getAllMailsByIdCandidat(Long candidatId) {
        if (!candidatRepository.existsById(candidatId)) {
            throw new ResourceNotFoundException("Not found candidat with id = " + candidatId);
        }
        return mailRepository.findByIdCandidat(candidatId);
    }

    @Override
    public Mail getMailById(Long id) {
        return mailRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Mail with id = " + id));
    }

    @Override
    public Mail createMail(Long candidatId, Mail mailRequest) {
        return candidatRepository.findById(candidatId).map(candidat -> {
            mailRequest.setCandidat(candidat);
            return mailRepository.save(mailRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found candidat with id = " + candidatId));
    }


    @Override
    public Mail updateMail(Long id, Mail mailRequest) {
        Mail existingMail = getMailById(id); // Renamed for clarity
        existingMail.setTypeMail(mailRequest.getTypeMail());
        existingMail.setDescriptionMail(mailRequest.getDescriptionMail());
        existingMail.setContenuMail(mailRequest.getContenuMail());
        return mailRepository.save(existingMail);
    }

    @Override
    public void deleteMail(Long id) {
        mailRepository.deleteById(id);
    }

    @Override
    public void deleteAllMailsOfIdCandidat(Long candidatId) {
        if (!candidatRepository.existsById(candidatId)) {
            throw new ResourceNotFoundException("Not found candidat with id = " + candidatId);
        }
        mailRepository.deleteByIdCandidat(candidatId);
    }
}



