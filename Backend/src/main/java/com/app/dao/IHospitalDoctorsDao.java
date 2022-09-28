package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.app.pojos.Hospital;
import com.app.pojos.Hospital_Doctor;


public interface IHospitalDoctorsDao extends JpaRepository<Hospital_Doctor, Long>{

	@Query("select d from Hospital_Doctor d where d.hospital.email=?1")
	List<Hospital_Doctor> findAllByHospitalEmail(String email);
	
	
	
	
	
	
}
