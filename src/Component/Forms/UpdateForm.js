import axios from 'axios';
import { React, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import classes from "./UpdateForm.module.css"

import Button from '../UI/Button'


export default function UpdateForm(props) {

    // const idOfCourse = props.item.id;


    const updateHandler = () => {
        console.log("update")


    }

    return (<>

        <div className={classes.container}>
            <ToastContainer />
            <div>
                <input className={classes.title} value={props.item.name} autoFocus />
                <textarea className={classes.description} cols="35" rows="7" value={props.item.description} />
            </div>
            <div>
                <Button style={{
                    margin: "9px 6px",
                    fontSize: "16px",
                    padding: "10px 23px"
                }} buttonName="Update" onClick={updateHandler} />
                <Button style={{
                    margin: "9px 6px",
                    fontSize: "16px",
                    padding: "10px 23px"
                }} buttonName="Cancel" onClick={() => { props.setShowForm(false) }} />

            </div>
        </ div >

    </>
    )
}
