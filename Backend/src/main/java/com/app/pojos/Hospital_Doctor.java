package com.app.pojos;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString()
@Entity
@Table(name = "hospital_Doctors")
public class Hospital_Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="hospitalId")
	private Hospital hospital;
	
	
	
	@Column(length=40)
	private String doctorName;
	
	@Column(length=30)
	private  String speciality;
	
	}
