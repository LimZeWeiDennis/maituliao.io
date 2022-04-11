import React from "react";
import "./Prototyping.css";
import LofiPrototyping from "./LofiPrototyping";
import CrazyEightGallery from "./CrazyEightGallery";
import MidFiPrototyping from "./MidFiPrototyping";
import HiFidelityPrototyping from "./HiFidelityPrototyping";

const Prototyping = props => {

    return (
        <div id='prototyping'>
            <div className='prototypingHeader' >
                <h1 className="prototypingTitle"> Prototyping </h1>
            </div>
            <LofiPrototyping/>
            <CrazyEightGallery/>
            <MidFiPrototyping/>
            <HiFidelityPrototyping/>

        </div>

    )
}


export default Prototyping;