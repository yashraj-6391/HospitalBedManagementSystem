package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IEnquiryDao;
import com.app.pojos.Enquiry;


@Service
@Transactional
public class EnquiryServiceImpl implements IEnquiryService {

	
	@Autowired
	IEnquiryDao enquiryDao;
	
	@Override
	public Enquiry saveEnquiry(Enquiry enq) {
		
		return enquiryDao.save(enq);
	}

	@Override
	public List<Enquiry> getAll(String email) {
		
		return enquiryDao.findAllByHospitalEmail(email);
	}

	@Override
	public String deleteEnquiry(Long id) {
		String mesg = "Enquiry details DELETION FAILED!!!!!!!!!!!";
		
		if(enquiryDao.existsById(id)) {
			System.out.println(" exist by id"+id);
			enquiryDao.deleteById(id);
			mesg = "Enquiry Details DELETED SUCCESSFULLY";
			return mesg;
		}
		System.out.println("not exist");
		return mesg;
	}
	
//	@Override
//	public String deleteEmpDetails(int empId) {
//		String mesg = "Deletion of emp details failed!!!!!!!!!!!";
//
//		if (empRepo.existsById(empId)) {
//			empRepo.deleteById(empId);
//			mesg = "Emp details deleted successfully , for emp id :" + empId;
//		}
//
//		return mesg;
//	}
	
	
	
	

}
