import React from "react";
import "./UserResearch.css";
import ResearchForm from '../assets/UserResearchForm.png';
import UserPersona1 from '../assets/userPersona1.jpg';
import UserPersona2 from '../assets/userPersona2.jpg';

const UserResearchContent = props => {

    return (
        <div className='researchContent'>
            <div className='motivation' >
                <div style={{padding:"0 5% 0 5%"}}>
                    <h1 className="contentTitle"> Research Motivation </h1>
                    <text className='contentText'>
                        To gather design and feature requirements for our &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        maituliao.io &nbsp;
                    </text>

                    <text className='contentText'>
                        mobile application based on data gathered from supermarket shoppers, we conducted interviews
                        and surveys with our identified user target groups.
                    </text>

                    <h1 className="contentTitle"> Objective </h1>

                    <ul className='contentText'>{'\u25CF'} To understand our user's challenges and pain points</ul>
                    <ul className='contentText'>{'\u25CF'} To understand the shopping habits of the users before, during
                        and after the shopping process</ul>
                    <ul className='contentText'>{'\u25CF'} To understand the processes the users take before and after
                        supermarket shopping</ul>


                </div>

                <img src={ResearchForm} className='motivationImg'/>


            </div>

            {/*------------------------------STUDY METHODS FROM HERE ON----------------------------------*/}
            <div className='studyMethods'>


                <div style={{padding:'0 15% 0 15%'}}>
                    <h1 className="studyMethodsTitle"> User Study Methods </h1>
                    <text className='contentText'>
                        An online &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        survey &nbsp;
                    </text>
                    <text className='contentText'>
                        was conducted to find out about the supermarket shoppers’ behaviors and some
                        challenges they faced while grocery shopping.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentTextBold'>
                        Semi-Structured interviews &nbsp;
                    </text>
                    <text className='contentText'>
                        and &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        contextual inquiry &nbsp;
                    </text>
                    <text className='contentText'>
                        methods were employed to study and understand the mindset and strategies of our users. We have
                        learnt of some points of improvements the interviewees feel can help improve their shopping
                        experience.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        In our contextual inquiry, we recruited 3 interviewees respectively to conduct a
                        semi-structured interview. The sampling method we chose for our interviewees was &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        convenience sampling. &nbsp;
                    </text>
                    <text className='contentText'>
                        During the interview, interviewees were asked a series of questions regarding their
                        shopping routine, type of shopper they consider themselves, potential and visible issues they
                        faced while shopping, their perspectives of how they find their essential and/or new products
                        in the supermarket, their experience with fast or slow shopping. Through allowing the users to
                        elaborate freely with their responses, we can eliminate any of our existing biases and this allows
                        us to gain a more holistic insight into the problem.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        Interviewees were asked to demonstrate how they search for common and new products in a new
                        supermarket environment. Based on their
                        responses and our observations, we are then able to better identify the prevalent pain points,
                        faced by both experienced and inexperienced supermarket shoppers, as well as to set the direction
                        for our research.
                    </text>
                    <br/>
                    <br/>
                    <text className='contentText'>
                        For the survey, we recruited participants by sharing it through our friends,
                        family and relatives that we felt were part of the identified target user groups and potential
                        interviewees. As such, we gathered a total of 57 respondents that proceeded with the survey. Our
                        respondents were asked the following survey questions such as: time taken to shop at the
                        supermarket, type of shopper and the challenges faced in grocery shopping. A survey-based
                        method allows us to have greater outreach in a short period of time, allowing us to gain a
                        more representative set of data to help clarify any form of misconceptions, stereotypes and
                        doubts that we had prior to the research.
                    </text>

                    {/*----------------------------------------LEARNING-----------------------------------------*/}

                    <h1 className="studyMethodsTitle" > Learnings </h1>
                    <div className='learningDiv'>
                        <div className='learningColumn'>
                            <h1 className='insightTitle'> INSIGHT #1</h1>
                            <text className='contentText'>
                                Working adults prefer quality over value as they
                                have higher spending power.
                            </text>

                            <h1 className='insightTitle'> INSIGHT #3</h1>
                            <text className='contentText'>
                                A shopper usually has a shopping list if they are unsure of what to buy.
                            </text>

                            <h1 className='insightTitle'> INSIGHT #5</h1>
                            <text className='contentText'>
                                A shopper will only ask for staff assistance if the staff is in
                                the vicinity or if it is convenient
                            </text>
                        </div>
                        <div className='learningColumn'>
                            <h1 className='insightTitle'> INSIGHT #2</h1>
                            <text className='contentText'>
                                An international student may prefer value over quality, as he/she might not have
                                high spending power
                            </text>

                            <h1 className='insightTitle'> INSIGHT #4</h1>
                            <text className='contentText'>
                                A familiar shopper might still have a difficult time navigating an unfamiliar environment
                            </text>

                            <h1 className='insightTitle'> INSIGHT #6</h1>
                            <text className='contentText'>
                                A shopper prefers physical shops rather than online ones as they get to feel and select
                                products when they are physically present.
                            </text>
                        </div>

                    </div>

                    <h1 className="studyMethodsTitle">Building Empathy</h1>
                    <text className='contentText'>
                        Using the data from our user study methods, we defined two user
                        personas, Trevon (21) and Rachel (28) to further empathize with our target users and prioritize
                        features and requirements based on their needs. Development of artefacts such as &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        user scenarios &nbsp;
                    </text>
                    <text className='contentText'>
                        and &nbsp;
                    </text>
                    <text className='contentTextBold'>
                        customer journey maps &nbsp;
                    </text>
                    <text className='contentText'>
                        were done for each persona attached below.
                    </text>


                    <div className="personaImageRow">
                        <img src={UserPersona1} className='personaImage'/>
                        <img src={UserPersona2} className='personaImage'/>
                    </div>





                </div>

            </div>
        </div>

    )
}


export default UserResearchContent;