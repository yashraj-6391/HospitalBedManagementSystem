package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Enquiry;

public interface IEnquiryDao extends JpaRepository<Enquiry, Long>{

	@Query("select e.id,e.patient.id,e.patient.name,e.patient.status from Enquiry e where e.hospital.id=?1")
	List<String> findAllByHospitalId(Long id);
	
//	@Query(value ="delete from enquiries where patient_id=?1" , nativeQuery = true)
//	int deleteByPatientId(Long id);

	
	@Query("select e from Enquiry e where e.hospital.email=?1")
	List<Enquiry>findAllByHospitalEmail(String email);
}
