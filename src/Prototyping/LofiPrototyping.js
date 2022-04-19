import React from "react";
import "./Prototyping.css";
import prototype1 from "../assets/prototype/prototype1.png";
import ExpandableImage from "../ExpandableImage/ExpandableImage";

const LofiPrototyping = props => {

    return (
        <div className='prototypingContent'>

            <div style={{padding:'0 15% 0 15%'}}>
                <h1 className="prototypingContentTitle"> Rapid Prototyping </h1>
                <text className='contentText'>
                    We used various tools taught in the lectures for rapid prototyping.
                    We began with paper and pencil methods such as sketching and Crazy 8's.
                    Then we moved on to using mid-fidelity tools such as Balsamiq Wireframes (omitted for brevity) and
                    then onto high fidelity tools such as Figma and Adobe XD.
                </text>
            </div>

            <div style={{padding:'7% 15% 0 15%'}}>
                <h1 className="prototypingContentTitle"> Crazy 8's </h1>
                <text className='contentText'>
                    Our team utilized Crazy 8's method to visualize the ideas generated from both the user scenarios
                    during the brainstorming session and the insights from user studies conducted.
                    Through it, each member did a round of wireframe sketching for the different ideas and
                    solutions individually. It is understood that we integrated ideas and components that we feel
                    are the most important in solving the problem, building from our own individual experiences.
                </text>
            </div>

            <div className="horizontalContent">
                <div className="flexDirectionVertical">
                    <ExpandableImage src={prototype1} alt="" className="zoom"></ExpandableImage>
                    <text className="textUnderImage">
                        Crazy 8’s activity is to come up with a layout for our 3 features: Shopping List,
                        Navigation and Item Finder interfaces.
                    </text>
                </div>

                <div className="flexDirectionVertical">
                    <h1 className="prototypingContentTitle"> Consolidated Crazy 8's </h1>
                    <text className='contentText'>
                        From all the individual sketches done by each team member, we consolidated the ideas and
                        functions into 1 sketch itself, which served as the base of our design.
                    </text>
                </div>

            </div>

        </div>

    )
}


export default LofiPrototyping;