package de.tub.ise.anwsys.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.tub.ise.anwsys.models.User;
import de.tub.ise.anwsys.repos.UserRepository;

@RestController
public class HelloController {

	@Autowired
	UserRepository repository;
		
	@RequestMapping(method=RequestMethod.GET, path="/hello")
	public String answerAndRegister(@RequestParam(value = "user", defaultValue = "AnwSys Student") String user) {
		List<User> foundUser = repository.findByName(user);
		if (!foundUser.isEmpty()) {
			return String.format("Welcome back, %s. How are your studies going?", foundUser.get(0).getName());
		} else {
			User u = new User(user);
			repository.save(u);
			return String.format("Welcome new User %s!", u.getName());
		}
	}
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<User> getAllUsers(){
		return (List<User>) repository.findAll(); 
	}
	@RequestMapping(method=RequestMethod.GET, value="/{name}")
	public List<User> getUser(@PathVariable String name){
		return repository.findByName(name);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public User createUser(@RequestBody User u){
		User user = new User(u.getName());
		return repository.save(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/{name}")
	public User updateUser(@RequestBody User u, @PathVariable String name){
		List<User> user = repository.findByName(name);
		((User) user).setName(u.getName());
		return (User) repository.save(user);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{name}")
	public void deleteUser(@PathVariable String name){
		repository.delete(name);
	}
	
}