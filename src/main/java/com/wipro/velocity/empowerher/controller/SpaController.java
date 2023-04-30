package com.wipro.velocity.empowerher.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class SpaController {

	
	@RequestMapping(value = "/**/{path:[^\\.]*}")
	public String redirectToIndex() {
	    return "forward:/index.html";
	}

}
