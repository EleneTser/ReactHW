import React from "react"
import "./UserCard.css"
export default function UserCard(props){
    return(
        <div className={props.role === "Admin" ? "Admin" : "User"}>
            <img src={props.photo} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Role: {props.role}</p>
            <p>Skills: {props.skills.join(", ")}</p>
        </div>
    )
}