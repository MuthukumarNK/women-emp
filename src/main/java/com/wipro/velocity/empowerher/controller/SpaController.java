package com.wipro.velocity.empowerher.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {

    @GetMapping(value = "{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
    
    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirectToIndex() {
        return "forward:/index.html";
    }

}
