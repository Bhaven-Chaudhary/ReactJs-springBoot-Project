import React from 'react'
import classes from "./Course.module.css"
import Button from './UI/Button'

export default function Course() {
    return (
        <div className={classes.container}>
            <div>
                <p className={classes.title}>Java</p>
                <p className={classes.description}>This is Java Description</p>
            </div>
            <div>
                <Button style={{
                    margin: "9px 6px",
                    fontSize: "16px",
                    padding: "10px 23px"
                }} buttonName="Update" />
                <Button style={{
                    margin: "9px 6px",
                    fontSize: "16px",
                    padding: "10px 23px"
                }} buttonName="Delete" />

            </div>


        </ div >
    )
}
