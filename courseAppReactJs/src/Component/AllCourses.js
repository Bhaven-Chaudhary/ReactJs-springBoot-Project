import React from "react";
import classes from './AllCourses.module.css'
import { useState, useEffect } from "react";
import Course from "./Course";
import baseUrl from "./Api/Path"
import axios from "axios";
import UpdateForm from "./Forms/UpdateForm";

export default function AllCourses(props) {

    const [courseList, setCourseList] = useState()

    useEffect(() => {

        axios.get(baseUrl).then(respose => {
            console.log(respose.data);
            setCourseList(respose.data);

        }, error => {
            console.log(error);
            alert("failed to fetch data from backend");
        })


    }, [])


    return (

        <div className={classes.container}>
            <h1 style={{ padding: "9px" }}>All Courses</h1>
            <div className={classes.courseContainer}>
                {
                    courseList ? courseList.map(item =>
                        <Course key={item.id} item={item} refresh={props.refresh} />
                    ) : "NO Courses to display"
                }
            </div>



        </div>

    )

}


