package de.tub.ise.anwsys.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import de.tub.ise.anwsys.models.SmartMeter;

public interface SmartMeterRepository extends CrudRepository<SmartMeter, String>{
	List<SmartMeter> findByKennung(String kennung);

}
