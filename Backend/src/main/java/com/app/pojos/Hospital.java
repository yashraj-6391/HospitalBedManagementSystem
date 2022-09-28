package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString(exclude = "password")
@Entity
@Table(name = "hospitals")
public class Hospital {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 40)
	private String name;

	@Column(length = 30 , unique=true)
	private String email;

	@Column(length = 16)
	private String password;
	
	@Column(name = "contactNo" ,length=13)
	private String contactNumber;

	@Column(length = 30)
	private String city;

	@Column(length = 30)
	private String state;

	@Column( name="covidTreatment",length = 20)
	@Enumerated(EnumType.STRING)
	private CovidTreatment status;


    private int totalNormalBeds;

	private int occupiedNormalBeds;

	private int totalOxygenBeds;

	private int occupiedOxygenBeds;

	@Column(name = "total_ICU_Beds")
	private int totalICUBeds;

	@Column(name = "occupied_ICU_Beds")
	private int occupiedICUBeds;


	
	}
