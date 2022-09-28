package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.pojos.Hospital;
import com.app.pojos.Patient;

public interface IPatientService {

	Patient savePatientDetails(Patient p);
	
	List<Patient> showAllAtMyHospital(String email);
	
	Patient getPatientDetails(Long id);
	
	Patient updatePatient(Patient patient);
	
	String deletepatient(Long id);
	
	Patient validatePatient(String email, String passsword);
	
	Patient findByEmail(String email);
	
	
	
	//get all emps
//	List<Employee> getAllEmpDetails();
//	//save new emp details
//	Employee saveEmpDetails(Employee transientEmp);
//	//delete emp details
//	String deleteEmpDetails(int empId);
//	//get emp details by specified id
//	Employee getEmpDetails(int empId);
//	//update existing emp details
//	Employee  updateEmpDetails(Employee updatedDetachedEmp);
}
