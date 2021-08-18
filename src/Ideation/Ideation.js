import React from "react";
import "./Ideation.css";
import KeyProblems from "./KeyProblems";
import Tasks from "./Tasks";

const Ideation = props => {

    return (
        <div>
            <div className='ideationHeader' >
                <h1 className="ideationTitle"> Ideation </h1>
            </div>
            <KeyProblems/>
            <Tasks/>
        </div>

    )
}


export default Ideation;