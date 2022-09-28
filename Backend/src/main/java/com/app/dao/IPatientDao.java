package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.app.pojos.Patient;

public interface IPatientDao extends JpaRepository<Patient, Long>{

	@Query("select p from Patient p where p.hospital.email=?1")
	List<Patient> findAllATMyHosp(String email);
	
	
	Optional <Patient> findByEmailAndPassword(String em, String pass);
	
	Optional <Patient> findByEmail(String email);
	
	
}
