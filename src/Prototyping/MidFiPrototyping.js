import React from "react";
import "./Prototyping.css";
import mainSplashScreen from "../assets/mainSplashScreen.png";
import Carousel from "react-multi-carousel";
import ExpandableImage from "./ExpandableImage";
import userPersona1 from "../assets/userPersona1.jpg";

const MidFiPrototyping = props => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div >
            <div className='prototypingContent'>

                <div style={{padding:'7% 15% 0 15%'}}>
                    <h1 className="prototypingContentTitle"> Mid Fidelity Prototyping </h1>
                    <text className='contentText'>
                        Based on the sketches generated from the sketching process, we worked individually to create
                        5 mid-fidelity prototypes for our proposed solution. During this phase, the team members did
                        not discuss with one another on how to present the interface, what auxiliary functions to include.
                        Each member was tasked to design for all 3 user tasks. The designs were solely up to each team
                        member to come up and create with. This arrangement was done in order to help us reduce group think,
                        as well as to expand more options and alternatives for the usability testing stage.
                    </text>
                </div>

            </div>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                itemClass="carousel-item-padding-20-px"
            >
                <ExpandableImage src={userPersona1 }/>
                <ExpandableImage src={mainSplashScreen }/>
                <ExpandableImage src={userPersona1 }/>
                <ExpandableImage src={mainSplashScreen }/>
                <ExpandableImage src={userPersona1 }/>

            </Carousel>
        </div>

    )
}


export default MidFiPrototyping;