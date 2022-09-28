package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IEnquiryDao;
import com.app.pojos.Data;
import com.app.pojos.Enquiry;
import com.app.pojos.Hospital;
import com.app.pojos.Hospital_Doctor;
import com.app.pojos.Patient;
import com.app.service.EmailServiceImpl;
import com.app.service.IHospitalDoctorsService;
import com.app.service.IHospitalService;
import com.app.service.IPatientService;

@RestController 
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class PatientController {

	@Autowired
	IPatientService patientService;

	

	@Autowired
	IHospitalService hospitalService;

	@Autowired
	IHospitalDoctorsService hospitalDoctorsService;
	
	@Autowired 
	IEnquiryDao enquiryDao;
	
	 @Autowired
	 EmailServiceImpl email;


	//register a patient
	@PostMapping("/patient/registerPatient")
	public Patient savePatient(@RequestBody Patient patient) {


		System.out.println(patient);
		email.sendSimpleMessage(patient.getEmail(), "Dear "+patient.getName()+",", "You have successfully registered in our system ,Your Email : "+
		patient.getEmail()+" and Password : "+patient.getPassword());
		System.out.println("Email send successfully");
		return patientService.savePatientDetails(patient);
	}
	
	
	
    //
	@GetMapping("/patient/showAllHospitals")
	public List<Hospital> showAllHospitals() {

		return hospitalService.showAllHospitals();
	}

	@GetMapping("/patient/showAllDoctors/{email}")
	public List<Hospital_Doctor> showAllDoctors(@PathVariable String email) {

		return hospitalDoctorsService.showAllByHospitalEmail(email);
	}
	
	
	
	@GetMapping("/patient/details/{email}")
	public Patient showPatientdetails(@PathVariable String email) {
		return patientService.findByEmail(email);
	}
	
	@PutMapping("/patient/update")
	public Patient updatepatientDetails(@RequestBody Patient patient) {
		return patientService.updatePatient(patient);
		
	};
	
	@PostMapping("/patient/login")
	public Data authenticateHospital(@RequestBody Data data) {
		
		try {
			  String mymail=data.email.trim();
			  String mypassword=data.getPassword().trim();
			  
			  System.out.println(mymail);
			  System.out.println(mypassword);
			  
			  System.out.println(mymail.getClass().getName());
			  System.out.println(mypassword.getClass().getName());
			  
			patientService.validatePatient(mymail, mypassword);
			
			
				Data newdata=new Data(mymail,mypassword);
				return newdata;
			

			
		}catch(Exception e) {
			e.printStackTrace();
			String mail="fakemail@gmail.com";
			String password="000";
			Data falsedata=new Data(mail,password);
			
			return falsedata;
		}
		
    }
	
	
	@PostMapping("/patient/createEnquiry")
	ResponseEntity<?> saveEnquiry(@RequestBody Enquiry enq) {
		try {
			
			System.out.println(enq);
			return ResponseEntity.ok(enquiryDao.save(enq));
		} catch (RuntimeException e) {
			System.out.println("err in get emp dtls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
		//return enquiryDao.save(enq);
	}
}
