package com.app.service;

import java.util.List;

import com.app.pojos.Enquiry;

public interface IEnquiryService {

	Enquiry saveEnquiry(Enquiry enq);
	
	List<Enquiry> getAll(String email);

	String deleteEnquiry(Long patientid);
}
