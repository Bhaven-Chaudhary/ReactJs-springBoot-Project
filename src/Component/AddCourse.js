import React from 'react'
import classes from './AddCourse.module.css'
import Button from './UI/Button'

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
                    <input className={classes.inputField} type="text" name="inputDesc" id="inputDesc" placeholder="Enter Description here" />
                </div>

                <Button buttonName="Submit" />


            </form>
        </div>
    )
}
