package com.app.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.app.pojos.Data;

import com.app.pojos.Enquiry;
import com.app.pojos.Hospital;
import com.app.pojos.Hospital_Doctor;
import com.app.pojos.Patient;
import com.app.service.EmailServiceImpl;
import com.app.service.IEnquiryService;
import com.app.service.IHospitalDoctorsService;
import com.app.service.IHospitalService;
import com.app.service.IPatientService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class HospitalController {

	@Autowired
	IHospitalService hospitalService;

	@Autowired
	IHospitalDoctorsService hospitalDoctorsService;

	@Autowired
	IPatientService patientService;
	
	@Autowired
	IEnquiryService enquiryService;

	@Autowired
	EmailServiceImpl email;
	// register a hospital
	@PostMapping("/hospital/register")
	public Hospital saveHospital(@RequestBody Hospital hospital) {

		email.sendSimpleMessage(hospital.getEmail(),hospital.getName()+",", "You have successfully registered in our system ,Your Email : "+
				hospital.getEmail()+" and Password : "+hospital.getPassword());
		System.out.println("Email send to successfully");
		
		return hospitalService.saveHospitalDetails(hospital);
	}

	// update a hospital (increase/decrease bedcount+ update)
	@PutMapping("/hospital/update")
	public Hospital updateHospDetails(@RequestBody Hospital hospital) {
		return hospitalService.updateHospitalDetails(hospital);

	};

	

	// show all patients
	@GetMapping("/hospital/patients/{email}")
	public List<Patient> showAllPatientsAtMyHospital(@PathVariable String email) {

		return patientService.showAllAtMyHospital(email);
	}

	
	
	
	
	 //authenticate
    @PostMapping("/hospital/login")
	public Data authenticateHospital(@RequestBody Data data) {
		String msg="SUCCESFULL";
		try {
			  String mymail=data.email.trim();
			  String mypassword=data.getPassword().trim();
			  
			  System.out.println(mymail);
			  System.out.println(mypassword);
			  
			  System.out.println(mymail.getClass().getName());
			  System.out.println(mypassword.getClass().getName());
			Hospital hospital= hospitalService.validateHospital(mymail, mypassword);
			
			
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
		
	
	
    
//	//delete a patient from system
//	@DeleteMapping("/hospital/deletePatient/{id}")
//	public String deletePatientDetails(@PathVariable Long id) {
//		return patientService.deletepatient(id);
//	}
    
    
    //delete a patient from system
	@PostMapping("/hospital/deletePatient")
	public String deletePatientDetails(@RequestBody Patient patient) {
    	 System.out.println(patient);
    	 System.out.println(patient.getBedType());
    	 System.out.println(patient.hospital.getEmail());
    	  Long id=patient.getId();
    	
    	 
		 String email=patient.hospital.getEmail();
		 
		 if(patient.getBedType().equals("NORMAL")) {
			 hospitalService.decreaseNormalBedCount(email);
		 }else if(patient.getBedType().equals("OXYGEN")) {
			 hospitalService.decreaseOxygenBedCount(email);
		 }else {
			 hospitalService.decreaseICUBedCount(email);
		 }
		 
		return patientService.deletepatient(id);
	}
    
	
	
	//see patients enquiries
	@GetMapping("/hospital/enquiries/{email}")
	 public List<Enquiry> showEnquiries(@PathVariable String email){
		
		return enquiryService.getAll(email);
	}
	
	//accept a enquiry from patient i.e update a patient
	 @PutMapping("/hospital/accept/updatePatient")
	 public Patient acceptenquiry(@RequestBody Patient patient) {
		 System.out.println(patient.getBedType());
		 System.out.println(patient);
		 System.out.println(patient.hospital.getEmail());
		
		String hospemail= patient.hospital.getEmail();
		 System.out.println(patient.hospital.getEmail());
		 
		 
		 email.sendSimpleMessage(patient.getEmail(),patient.getName()+",", "You have allocated a bed  in our "+patient.hospital.getName()+"Your Email : "+
					patient.getEmail()+" and Password : "+patient.getPassword());
			System.out.println("Email send to successfully");
		 
		
		 
		 if(patient.getBedType().equals("NORMAL")) {
			 System.out.println("its normal");
			 hospitalService.increaseNormalBedCount(hospemail); 
		 }else if(patient.getBedType().equals("OXYGEN")) {
			 
			 hospitalService.increaseOxygenBedCount(hospemail);
		 }else {
			 hospitalService.increaseICUBedCount(hospemail);
		 }
		 return patientService.savePatientDetails(patient);
	 }
	 
	 //delete a enquiry
	 @DeleteMapping("/hospital/enquiry/delete/{id}")
	 public String deleteEnquiryDetails(@PathVariable Long id) {
		 return enquiryService.deleteEnquiry(id);
	 }
	 
	 @GetMapping("/hospital/details/{email}")
	 public ResponseEntity<?> getHospitalByEmail(@PathVariable String email) {
			System.out.println("mail " + email);
			try {
				return ResponseEntity.ok(hospitalService.findByEmail(email));
			} catch (RuntimeException e) {
				System.out.println("err in get emp dtls " + e);
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
		 
	 }
	 
	 
	// add doctor to system
		@PostMapping("/hospital/addDoctor")
		public Hospital_Doctor addDoctor(@RequestBody Hospital_Doctor details) {

			return hospitalDoctorsService.addDoctor(details);
		}
		
		
		// see doctors working for me
		@GetMapping("/hospital/showMyHospDoctors/{email}")
		public List<Hospital_Doctor> showAllDoctorsAtMyHospital(@PathVariable String email) {
              System.out.println("there u are");
			return hospitalDoctorsService.showAllByHospitalEmail(email);
		}
	 
	 

}
