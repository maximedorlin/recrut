package com.afreetech.recrutement.service;



import java.util.List;

import com.afreetech.recrutement.entity.JobOffer;

public interface JobOfferService {
    JobOffer createJobOffer(JobOffer jobOffer);
    List<JobOffer> getAllJobOffers();
    JobOffer getJobOfferById(Long id);
    void deleteJobOffer(Long id);
}
