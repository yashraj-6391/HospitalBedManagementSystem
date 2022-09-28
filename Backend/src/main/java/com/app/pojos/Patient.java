package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude="password")
@Entity
@Table(name = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	
	@Column(length = 40)
	private String name;
	
	@Column(length = 30 , unique=true)
    private String email;
	
	@Column(length = 30)
	private String password;
	
	@Column(name = "contactNo" ,length=13)
	private String contactNumber;
	
	@Column(length = 30)
	private String gender;
	
	
	@Column(length = 30)
    private String city;
	
	@Column(length = 30)
    private String state;

	@Column(name="pin")
	private int pincode;
	
	@Column(name="CovidStatus",length = 10)
	@Enumerated(EnumType.STRING)
	private CovidStatus status;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="hospitalId" , nullable=true)
	public Hospital hospital;
	
	@Column(name="bedType")
	public String bedType;
	
	@Transient
	@OneToOne(cascade = CascadeType.ALL)
	public Enquiry enquiry;
	
	
	
	
}
