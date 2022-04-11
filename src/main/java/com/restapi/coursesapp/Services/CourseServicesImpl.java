package com.restapi.coursesapp.Services;

import java.util.ArrayList;
import java.util.List;

import com.restapi.coursesapp.entities.Course;

import org.springframework.stereotype.Component;

@Component
public class CourseServicesImpl implements CourseServices {

    List<Course> list;

    public CourseServicesImpl() {

        list = new ArrayList<>();
        list.add(new Course(01, "Java", "This is Java Course"));
        list.add(new Course(02, "Python", "This is Python Course"));

    }

    @Override
    public List<Course> getCourses() {

        return list;
    }

}
