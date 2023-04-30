package com.wipro.velocity.empowerher.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.WebUtils;

@Controller
public class SpaController {

    @RequestMapping(value = "/**/{path:[^\\.]*}")
    public String redirectToIndex(HttpServletRequest request, HttpServletResponse response) throws IOException {
        if (request.getRequestURI().startsWith("/api/")) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return null;
        }
        if (isIncludeStackTrace(request, MediaType.ALL)) {
            request.setAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE, new RuntimeException("Stack trace"));
        }
        return "forward:/index.html";
    }

    private boolean isIncludeStackTrace(HttpServletRequest request, MediaType produces) {
        String parameter = request.getParameter("trace");
        if (parameter == null) {
            return false;
        }
        if (!"false".equalsIgnoreCase(parameter)) {
            return true;
        }
        MediaType acceptableMediaType = MediaType.parseMediaTypes(request.getHeader("Accept")).get(0);
        return acceptableMediaType.includes(produces);
    }

}


