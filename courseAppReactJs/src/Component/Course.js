import axios from 'axios';
import { React, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import baseUrl from './Api/Path';
import classes from "./Course.module.css"
import UpdateForm from './Forms/UpdateForm';
import Button from './UI/Button'


export default function Course(props) {
    const [showForm, setShowForm] = useState(false);

    const idOfCourse = props.item.id;

    const deleteHandler = () => {
        console.log("delete" + idOfCourse);

        axios.delete(`${baseUrl}${idOfCourse}`).then(response => {
            toast("Course deleted Sucessfully", { position: "top-center" });
        }, error => {
            console.log(error);
            toast("Something went wrong", { position: "top-center" });
        })

        props.refresh();


    }

    const updateHandler = () => {
        console.log("update" + idOfCourse)
        setShowForm(true);

    }

    return (<>

        {!showForm && <div className={classes.container}>
            <ToastContainer />
            <div>
                <p className={classes.title}>{props.item.name}</p>
                <p className={classes.description}>{props.item.description}</p>
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
                }} buttonName="Delete" onClick={deleteHandler} />

            </div>
        </ div >}
        {showForm && <UpdateForm setShowForm={setShowForm} item={props.item} refresh={props.refresh} />}

    </>
    )
}
