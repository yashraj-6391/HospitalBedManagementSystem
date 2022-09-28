package com.app.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Hospital;

public interface IHospitalDao extends JpaRepository<Hospital, Long> {

	
	@Query(value="select * from hospitals h where email=?1 " ,nativeQuery=true)
	Optional <Hospital> findHospitalByEmail(String email);
 
	Optional <Hospital> findByEmailAndPassword(String em, String pass);
	
	@Query("select h from Hospital h where h.id=?1")
	Optional <Hospital> findById(Long id);
	
	
	@Modifying 
	@Query(value="update hospitals set occupied_normal_beds=occupied_normal_beds+1 where email=?1",nativeQuery=true)
	void raiseNormalBedcount(String email);
	
	@Modifying 
	@Query(value="update hospitals set occupied_oxygen_beds=occupied_oxygen_beds+1 where email=?1",nativeQuery=true)
	void raiseOXYBedcount(String email);
	
	
	@Modifying 
	@Query(value="update hospitals set occupied_icu_beds=occupied_icu_beds+1 where email=?1",nativeQuery=true)
	void raiseICUBedcount(String email);
	
	

	@Modifying 
	@Query(value="update hospitals set occupied_normal_beds=occupied_normal_beds-1 where email=?1",nativeQuery=true)
	void dropNormalBedcount(String email);
	
	@Modifying 
	@Query(value="update hospitals set occupied_oxygen_beds=occupied_oxygen_beds-1 where email=?1",nativeQuery=true)
	void dropOXYBedcount(String email);
	
	
	@Modifying 
	@Query(value="update hospitals set occupied_icu_beds=occupied_icu_beds-1 where email=?1",nativeQuery=true)
	void dropICUBedcount(String email);
	
	

	
	
	


}
