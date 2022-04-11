package com.restapi.coursesapp.Services;

import java.util.List;

import com.restapi.coursesapp.entities.Course;

public interface CourseServices {

    public List<Course> getAllCourses();

    public Course getCourse(int courseId);

    public boolean addCourse(Course course);

}
