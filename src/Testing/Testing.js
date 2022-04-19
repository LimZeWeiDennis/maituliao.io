import React from "react";
import "./Testing.css";
import TestingContent from "./TestingContent";

const Testing = props => {

    return (
        <div id='testing'>
            <div className='testingHeader' >
                <h1 className="testingTitle"> Testing </h1>
            </div>
            <TestingContent/>
        </div>

    )
}


export default Testing;