package de.tub.ise.anwsys.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SmartMeter {

	 @Id
	 String kennung;

	public SmartMeter(String kennung) {
		super();
		this.kennung = kennung;
	}
	
	public SmartMeter(){}

	public String getKennung() {
		return kennung;
	}

	public void setKennung(String kennung) {
		this.kennung = kennung;
	}
}
