package com.wipro.velocity.empowerher.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/{path:[^\\.]*}")
    public String forwardToAngular() {
        return "forward:/index.html";
    }
}

