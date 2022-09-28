package com.app.pojos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Data {

	public String email;
	public Data(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String password;
}
