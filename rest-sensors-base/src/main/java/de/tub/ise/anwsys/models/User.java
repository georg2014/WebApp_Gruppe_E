package de.tub.ise.anwsys.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User implements Serializable {

	private static final long serialVersionUID = -6640481949420444264L;
	
	@Id
	String name;
	

	protected User() {
		//empty constructor required by JPA
	}

	public User(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
}