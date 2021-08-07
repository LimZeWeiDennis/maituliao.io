import React from "react";
import mainSplashScreen from '../assets/mainSplashScreen.png';

import './LandingHeader.css';


const LandingHeader = props => {

    return (
        <div className='header' >
            <img src={mainSplashScreen} className='img'/>
            <div className='title'>
                <h1 className="appTitle"> maituliao.io </h1>
                <text className="appSubtitle"> CS3240 Group 9</text>
            </div>
        </div>
    )
}


export default LandingHeader;