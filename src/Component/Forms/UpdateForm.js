import axios from 'axios';
import { React, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import classes from "./UpdateForm.module.css"

import Button from '../UI/Button'
import baseUrl from '../Api/Path';


export default function UpdateForm(props) {

    const navigate = useNavigate();
    const [updatedName, setUpdatedName] = useState(props.item.name);
    const [updatedDesc, setUpdatedDesc] = useState(props.item.description);


    const updateHandler = () => {

        const updatedCourse = {
            id: props.item.id,
            name: updatedName,
            description: updatedDesc
        }

        console.log(updatedCourse);

        axios.put(baseUrl, updatedCourse).then(response => {
            toast(response.data, { position: "top-center" });
        }, error => {
            console.log(error);
            toast("Something went wrong", { position: "top-center" });
        })

        props.setShowForm(false);

    }

    return (<>

        <div className={classes.container}>
            <ToastContainer />
            <div>
                <input className={classes.title} autoFocus value={updatedName} onChange={event => setUpdatedName(event.target.value)} />
                <textarea className={classes.description} cols="35" rows="7" value={updatedDesc} onChange={event => setUpdatedDesc(event.target.value)} />
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
