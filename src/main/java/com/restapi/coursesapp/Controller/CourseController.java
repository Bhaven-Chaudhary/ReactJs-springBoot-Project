package com.restapi.coursesapp.Controller;

import java.util.List;

import com.restapi.coursesapp.Services.CourseServices;
import com.restapi.coursesapp.entities.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

    @Autowired
    private CourseServices courseService;

    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }

    @GetMapping("/getCourses")
    public List<Course> getAllCourses() {

        return courseService.getCourses();
    }

}
