package com.restapi.coursesapp.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.restapi.coursesapp.entities.Course;

import org.springframework.stereotype.Service;

@Service
public class CourseServicesImpl implements CourseServices {

    List<Course> list;

    public CourseServicesImpl() {

        list = new ArrayList<>();
        list.add(new Course(01, "Java", "This is Java Course"));
        list.add(new Course(02, "Python", "This is Python Course"));

    }

    @Override
    public List<Course> getAllCourses() {

        return list;
    }

    @Override
    public Course getCourse(int courseId) {

        return list.stream().filter(course -> course.getId() == courseId).findFirst().get();
    }

    @Override
    public boolean addCourse(Course course) {
        boolean added = list.add(course);
        return added;
    }

    @Override
    public boolean update(Course course) {

        try {
            list = list.stream().map(obj -> {
                if (obj.getId() == course.getId())
                    obj = course;

                return obj;
            }).collect(Collectors.toList());
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }

    @Override
    public boolean delete(int courseId) {

        try {
            list = list.stream().filter(course -> course.getId() != courseId).collect(Collectors.toList());
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
