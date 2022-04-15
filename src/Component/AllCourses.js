import React from "react";
import classes from './AllCourses.module.css'
import { useState } from "react";
import Course from "./Course";

export default function AllCourses() {

    const [courseList, setCourseList] = useState(
        [
            { tittle: "Java", description: "This is Java Discription" },
            { tittle: "Python", description: "This is Python Discription" },
            { tittle: "JavaScript", description: "This is JavaScript Discription" }

        ]
    )

    return (

        <div className={classes.container}>
            <h1 style={{ padding: "9px" }}>All Courses</h1>

            {
                courseList.length > 0 ? courseList.map(item =>
                    <Course item={item} />
                ) : "NO Courses to display"
            }

        </div>

    )

}


