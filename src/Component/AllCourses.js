import React from "react";
import classes from './AllCourses.module.css'
import { useState } from "react";

export default function AllCourses() {

    const [courseList, setCourseList] = useState(
        [
            { tittle: "Java", description: "This is Java Discription" },
            { tittle: "Python", description: "This is Python Discription" },
            { tittle: "JavaScript", description: "This is JavaScript Discription" }

        ]
    )

    return (

        <div></div>

    )

}


