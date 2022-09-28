package com.app.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Exception.ResourceNotFoundException;
import com.app.dao.IPatientDao;
import com.app.pojos.Patient;

@Service
@Transactional
public class PatientServiceImpl implements IPatientService {

	
	@Autowired
	IPatientDao patientDao;
	
	
	@Override
	public Patient savePatientDetails(Patient p) {
		
		return patientDao.save(p);
	}


	@Override
	public List<Patient> showAllAtMyHospital(String email) {
		
		return patientDao.findAllATMyHosp(email);
	}


	@Override
	public Patient getPatientDetails(Long id) {
		
		return patientDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid emp id !!!!!!" + id));
	}


	@Override
	public Patient updatePatient(Patient patient) {
		
		return patientDao.save(patient);
		
	}


	@Override
	public String deletepatient(Long id) {
		String mesg = "Deletion of patient details failed!!!!!!!!!!!";

		if (patientDao.existsById(id)) {
			patientDao.deleteById(id);
			mesg = "Patient details deleted successfully , for Patient id :" + id;
		}

		return mesg;
	}


	@Override
	public Patient validatePatient(String email, String passsword) {
		
		return patientDao.findByEmailAndPassword(email, passsword).orElseThrow(() -> new RuntimeException("Invalid email or password"));
	}


	@Override
	public Patient findByEmail(String email) {
		
		return patientDao.findByEmail(email).orElseThrow(() -> new RuntimeException("Invalid email "));
	}

	
	

}
