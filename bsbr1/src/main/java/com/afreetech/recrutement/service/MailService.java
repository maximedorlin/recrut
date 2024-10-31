package com.afreetech.recrutement.service;

import java.util.List;
import com.afreetech.recrutement.entity.Mail;

public interface MailService {
    List<Mail> getAllMailsByIdCandidat(Long candidatId);
    Mail getMailById(Long id);
    Mail createMail(Long candidatId, Mail mailRequest);
    Mail updateMail(Long id, Mail mailRequest);
    void deleteMail(Long id);
    void deleteAllMailsOfIdCandidat(Long candidatId);
    List<Mail> getAllMails();
}
