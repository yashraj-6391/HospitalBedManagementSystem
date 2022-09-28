package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Exception.ResourceNotFoundException;
import com.app.dao.IHospitalDao;
import com.app.pojos.Hospital;


@Service
@Transactional
public class HospitalServiceImpl implements IHospitalService {

	
	@Autowired
	IHospitalDao hospitalDao;
	
	
	
	@Override
	public List<Hospital> showAllHospitals() {
		
		return hospitalDao.findAll();
	}

	@Override
	public Hospital saveHospitalDetails(Hospital hospital) {
		
		return hospitalDao.save(hospital);
	}

	@Override
	public Hospital updateHospitalDetails(Hospital hospital) {
		
		return hospitalDao.save(hospital);
	}

	

	@Override
	public Hospital validateHospital(String email, String passsword) {
		
		return hospitalDao.findByEmailAndPassword(email, passsword).orElseThrow(() -> new RuntimeException("Invalid email or password"));
	}

	@Override
	public void increaseNormalBedCount(String email) {
		
		
		hospitalDao.raiseNormalBedcount(email);
	}

	@Override
	public void increaseOxygenBedCount(String email) {
		hospitalDao.raiseOXYBedcount(email);
	}

	@Override
	public void increaseICUBedCount(String email) {
		hospitalDao.raiseICUBedcount(email);
		
	}

	@Override
	public Hospital findByid(Long id) {
		
		return hospitalDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid hospital id !!!!!!" + id));
	}

	@Override
	public  Hospital findByEmail(String email) {
		
		return hospitalDao.findHospitalByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Invalid email !!!!!!" + email));
	}

	@Override
	public void decreaseNormalBedCount(String email) {
		
		hospitalDao.dropNormalBedcount(email);
		
	}

	@Override
	public void decreaseOxygenBedCount(String email) {
		hospitalDao.dropOXYBedcount(email);
		
	}

	@Override
	public void decreaseICUBedCount(String email) {
		hospitalDao.dropICUBedcount(email);
		
	}

	

	

	

	
	
	
	

	

}
