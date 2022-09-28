package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import  com.app.pojos.Hospital;

public interface IHospitalService {

	List<Hospital> showAllHospitals();
	
	Hospital saveHospitalDetails(Hospital hospital);
	
	Hospital updateHospitalDetails(Hospital hospital);
	
     Hospital findByid(Long id);

    Hospital validateHospital(String email, String passsword);
    
    Hospital findByEmail(String email);
    
    void increaseNormalBedCount(String email);
    
    void increaseOxygenBedCount(String email);
    
    void increaseICUBedCount(String email);
    
    void decreaseNormalBedCount(String email);
    
    void decreaseOxygenBedCount(String email);
    
    void decreaseICUBedCount(String email);
    
    
}
