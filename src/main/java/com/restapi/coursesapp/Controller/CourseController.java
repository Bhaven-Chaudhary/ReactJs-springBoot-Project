package com.restapi.coursesapp.Controller;

import java.util.List;

import com.restapi.coursesapp.Services.CourseServices;
import com.restapi.coursesapp.entities.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

    @Autowired
    private CourseServices courseService;

    @GetMapping("/home")
    public String home() {
        return "this is home page";
    }

    // Get all courses
    @GetMapping("/Courses")
    public List<Course> getAllCourses() {

        return courseService.getAllCourses();
    }

    // Get single course by id
    @GetMapping("Courses/{courseId}")
    public Course getCourse(@PathVariable int courseId) {

        return courseService.getCourse(courseId);
    }

    @PostMapping("/Courses")
    public String addCourse(@RequestBody Course course) {

        boolean added = courseService.addCourse(course);
        return (added ? "Course added sucessfully" : "Something went wrong");
    }

    @PutMapping("/Courses}")
    public ResponseEntity<String> update(@RequestBody Course course) {

        boolean update = courseService.update(course);

        if (update) {
            return ResponseEntity.ok("Updated sucessfully");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
    }

    @DeleteMapping("Courses/{courseId}")
    public ResponseEntity<String> delete(@PathVariable int courseId) {

        boolean deleted = courseService.delete(courseId);
        if (deleted) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deletion sucessfull");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();

    }

}
