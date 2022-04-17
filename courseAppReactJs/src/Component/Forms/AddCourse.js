import React from 'react'
import classes from './AddCourse.module.css'
import Button from '../UI/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import baseUrl from '../Api/Path'
import { toast, ToastContainer } from 'react-toastify'

export default function AddCourse() {


    const enteredName = useRef()
    const enteredDescription = useRef();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const inputName = enteredName.current.value;
        const inputDes = enteredDescription.current.value;


        const course = {
            name: inputName,
            description: inputDes
        }
        console.log(course);

        axios.post(baseUrl, course).then(respnse => {
            navigate("/");
            toast("Course Added Succussfully", { position: "top-center" });

        },
            error => {
                console.log(error);
                toast("Please Enter valid input")
            })




    }

    return (
        <div className={classes.formContainer}>
            <ToastContainer />

            <h1 className={classes.h1}>Add Course</h1>
            <form onSubmit={submitHandler} className={classes.form}>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="inputTittle">Tittle</label>
                    <input ref={enteredName} className={classes.inputField} type="text" name="inputTittle" id="inputTittle" placeholder="Enter name here" required />
                </div>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="inputDesc">Description</label>
                    {/* <input type="textarea" name="inputDesc" id="inputDesc"  /> */}
                    <textarea ref={enteredDescription} className={classes.inputField} name="inputDesc" id="inputDesc" cols="30" rows="10" required />
                </div>

                <Button buttonName="Submit" />
                <Link to={"/"} className={classes.buttonStyle}>Back</Link>

            </form>
        </div>
    )
}
