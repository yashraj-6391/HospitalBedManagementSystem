package com.app.service;

import java.util.List;


import com.app.pojos.Hospital;
import com.app.pojos.Hospital_Doctor;
public interface IHospitalDoctorsService {
	
	List<Hospital_Doctor> showAllByHospitalEmail(String email);
	
	
	
	Hospital_Doctor addDoctor(Hospital_Doctor details);

}
