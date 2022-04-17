import React from 'react'
import classes from "./Home.module.css"
import { Link } from 'react-router-dom'

export default function Home() {


    return (
        <div className={classes.container}>

            <h1 className={classes.heading}>Course App</h1>
            <p className={classes.description}>This course app is used to save the courses and their details, it is created using React Js and Spring Boot</p>

            <Link to={"/addCourse"} className={classes.buttonStyle}>Add Course</Link>

        </div>
    )
}
