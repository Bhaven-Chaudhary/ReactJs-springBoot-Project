import React from 'react'
import classes from "./Course.module.css"
import Button from './UI/Button'

export default function Course(props) {
    return (
        <div className={classes.container}>
            <div>
                <p className={classes.title}>{props.item.tittle}</p>
                <p className={classes.description}>{props.item.description}</p>
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
