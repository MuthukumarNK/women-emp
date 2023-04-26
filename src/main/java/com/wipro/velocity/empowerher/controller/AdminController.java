package com.wipro.velocity.empowerher.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.velocity.empowerher.model.Admin;
import com.wipro.velocity.empowerher.model.User;
import com.wipro.velocity.empowerher.repository.AdminRepository;


@RestController
@CrossOrigin(origins="https://womenempowerment.azurewebsites.net")
@RequestMapping("/api")
public class AdminController 
{
	
	@Autowired
	private AdminRepository arepo;
	
	//POST- http://localhost:9095/wep/api/loginAdmin
	@PostMapping("/loginAdmin")
	public Boolean loginUser(@Validated @RequestBody Admin admin)
	{
		Boolean isLogin=false;
		
		String username=admin.getUserName();
	    String password=admin.getPassword();
	    Admin a=arepo.findByUserName(username);
	    
	    if(a!=null)
	    {
	    	if(username.equals(a.getUserName()) && password.equals(a.getPassword()))
		    {
		    	isLogin=true;
		    }
	    }
	    
	    return isLogin;
	}
	
	@PostMapping("/registerAdmin")
	public Admin saveAdmin(@RequestBody Admin admin)
	{
		arepo.save(admin);
		
		return admin;
	}
}