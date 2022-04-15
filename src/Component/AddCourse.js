import React from 'react'
import classes from './AddCourse.module.css'
import Button from './UI/Button'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className={classes.formContainer}>
            <h1 className={classes.h1}>Add Course</h1>
            <form action="#" className={classes.form}>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="inputTittle">Tittle</label>
                    <input className={classes.inputField} type="text" name="inputTittle" id="inputTittle" placeholder="Enter name here" />
                </div>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="inputDesc">Description</label>
                    {/* <input type="textarea" name="inputDesc" id="inputDesc"  /> */}
                    <textarea className={classes.inputField} name="inputDesc" id="inputDesc" cols="30" rows="10" >Enter Description here</textarea>
                </div>

                <Button buttonName="Submit" />
                <Link to={"/"} className={classes.buttonStyle}>Add Course</Link>

            </form>
        </div>
    )
}
