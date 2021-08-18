import React from "react";
import "./Overview.css";
import Overview_Illustration from "../assets/Overview_Illustration.jpg";
import Prototype from "../assets/Overview_Prototype.gif";

const OverviewContent = props => {

    return (
        <div className='overviewContent'>
            <div className='motivation' >
                <div style={{padding:"0 5% 0 5%"}}>
                    <h1 className="contentTitle"> Motivation </h1>
                    <text className='contentText'>
                        Supermarkets provide a platform for people to get their daily needs,
                        and because of its accessibility and comfort, it has become a staple in our lives in recent years.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        However, in today's fast-paced world, where people aspire to always be &nbsp;
                    </text>

                    <text className='contentTextBold'>
                        one step ahead of one another &nbsp;
                    </text>

                    <text className='contentText'>
                        , they prefer a shopping experience that is &nbsp;
                    </text>

                    <text className='contentTextBold'>
                        less time-consuming and inconvenient.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        In this &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        COVID-19 pandemic &nbsp;
                    </text>
                    <text className='contentText'>
                        , supermarkets have become a potential hotspot for COVID-19 transmission
                        due to the sale of necessities.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        Our design seeks to streamline the shopping process to make it &nbsp;
                    </text>

                    <text className='contentTextBold'>
                        speedier &nbsp;
                    </text>

                    <text className='contentText'>
                        , so that there is &nbsp;
                    </text>

                    <text className='contentTextBold'>
                        less time usage &nbsp;
                    </text>

                    <text className='contentText'>
                    for this task and prolonged contact between people is minimized.
                    </text>

                </div>

                <img src={Overview_Illustration} className='motivationImg'/>

            </div>

            <div className='problemSolution'>
                <img className='prototypeGif' src={Prototype} alt="loading..."/>
                <div style={{padding:'0 15% 0 15%'}}>
                    <h1 className="contentTitle"> Problem </h1>
                    <text className='contentText'>
                        Lack of unfamiliarity with the layout of the supermarket, including the placement of products
                        they want to purchase, spending unnecessary time figuring out what they need to buy, lack of
                        knowledge on the stock count of their necessities that can result in wasted trips to the supermarket.
                    </text>

                    <h1 className="contentTitle" style={{paddingTop:'15%'}}> Solution </h1>
                    <text className='contentText'>
                        A mobile web application where supermarket shoppers of any age can access, boasting of key
                        features to streamline the time-consuming shopping process in supermarkets.
                    </text>

                </div>

            </div>
        </div>

    )
}


export default OverviewContent;