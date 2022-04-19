import React from "react";
import Carousel from 'react-multi-carousel';
import "./Prototyping.css";
import 'react-multi-carousel/lib/styles.css'
import crazySketch1 from "../assets/prototype/crazySketch1.png";
import crazySketch2 from "../assets/prototype/crazySketch.png";
import crazySketch3 from "../assets/prototype/crazySketch2.png";
import crazySketch4 from "../assets/prototype/crazySketch3.jpeg";
import crazySketch5 from "../assets/prototype/crazySketch5.png";
import ExpandableImage from "../ExpandableImage/ExpandableImage";

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
                <ExpandableImage src={crazySketch1}/>
                <ExpandableImage src={crazySketch5 }/>
                <ExpandableImage src={crazySketch2 }/>
                <ExpandableImage src={crazySketch3 }/>
                <ExpandableImage src={crazySketch4 }/>

            </Carousel>
        </div>



    );

}

export default CrazyEightGallery;