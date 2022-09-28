package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IHospitalDoctorsDao;

import com.app.pojos.Hospital;
import com.app.pojos.Hospital_Doctor;

@Service
@Transactional
public class HospitalDoctorsImpl implements IHospitalDoctorsService {
	
	@Autowired 
	IHospitalDoctorsDao hospitalDoctors;

	@Override
	public List<Hospital_Doctor> showAllByHospitalEmail(String email) {
		
		return hospitalDoctors.findAllByHospitalEmail(email);
	}



	@Override
	public Hospital_Doctor addDoctor(Hospital_Doctor details) {
		
		return hospitalDoctors.save(details);
	}

}
