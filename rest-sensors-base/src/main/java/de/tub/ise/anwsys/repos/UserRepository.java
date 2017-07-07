package de.tub.ise.anwsys.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import de.tub.ise.anwsys.models.User;

public interface UserRepository extends CrudRepository<User, String> {
	List<User> findByName(String name);
}
