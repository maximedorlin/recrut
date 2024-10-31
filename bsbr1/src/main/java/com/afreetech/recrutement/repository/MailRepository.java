

package com.afreetech.recrutement.repository;

import com.afreetech.recrutement.entity.Mail;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MailRepository extends JpaRepository<Mail, Long> {

    @Query("SELECT c FROM Mail c WHERE c.candidat.id = :candidatId")
    List<Mail> findByIdCandidat(@Param("candidatId") Long candidatId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Mail m WHERE m.candidat.id = :candidatId")
    void deleteByIdCandidat(@Param("candidatId") Long candidatId);

}
