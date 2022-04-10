import React from "react";
import "./Prototyping.css";
import LofiPrototyping from "./LofiPrototyping";
import CrazyEightGallery from "./CrazyEightGallery";

const Prototyping = props => {

    return (
        <div id='prototyping'>
            <div className='prototypingHeader' >
                <h1 className="prototypingTitle"> Prototyping </h1>
            </div>
            <LofiPrototyping/>
            <CrazyEightGallery/>

        </div>

    )
}


export default Prototyping;