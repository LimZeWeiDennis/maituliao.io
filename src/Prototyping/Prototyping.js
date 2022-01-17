import React from "react";
import "./Prototyping.css";
import LofiPrototyping from "./LofiPrototyping";

const Prototyping = props => {

    return (
        <div id='prototyping'>
            <div className='prototypingHeader' >
                <h1 className="prototypingTitle"> Prototyping </h1>
            </div>
            <LofiPrototyping/>
        </div>

    )
}


export default Prototyping;