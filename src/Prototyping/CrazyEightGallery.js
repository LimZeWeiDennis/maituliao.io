import React from "react";
import Carousel from 'react-multi-carousel';
import "./Prototyping.css";
import 'react-multi-carousel/lib/styles.css'
import mainSplashScreen from "../assets/mainSplashScreen.png";
import userPersona1 from "../assets/userPersona1.jpg";
import ExpandableImage from "./ExpandableImage";

const CrazyEightGallery = props => {

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
        <div>

            <div className='prototypingContent'>

                <div style={{padding:'7% 15% 0 15%'}}>
                    <h1 className="prototypingContentTitle"> Individual Sketches </h1>
                    <text className='contentText'>
                        Below is the gallery of individual sketches done up by each member in our team.
                    </text>
                </div>

            </div>

            <Carousel
                className="carousel"
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



    );

}

export default CrazyEightGallery;