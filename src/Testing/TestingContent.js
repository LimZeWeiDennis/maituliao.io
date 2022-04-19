import React from "react";
import "./Testing.css";
import ResearchForm from "../assets/UserResearchForm.png";

const TestingContent = props => {

    return (
        <div >
            {/*probably need to make a new css class for the this section*/}
            <div className='userTesting'>
                <div style={{padding:"0 5% 0 5%"}}>
                    <h1 className="contentTitle"> User Testing Recruitment </h1>
                    <text className='contentText'>
                        We have recruited a total of 10 test users, two test users from each of our team members.<br/>
                        In order to keep our test just, we ensured that the potential test users fit our criteria,
                        which is for them to be an IOS user. <br/>

                        We used the A/B Testing methodology.
                    </text>

                    <h1 className="contentTitle"> A/B Testing </h1>

                    <text className='contentText'>
                        We conducted A/B testing to compare the 2 different designs of the same prototype, so as to get
                        insights into which alternative design performs the best in providing a better user experience.<br/>

                        To reduce the "order effect", we employed Latin square counterbalancing. We also defined our
                        variables in our A/B Testing phase.
                    </text>
                </div>
            </div>
            {/* Section for variables and how they affect our product ---------------------------------------------------*/}

            <div className='userTesting'>
                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentTitle"> 1)Independent Variables </h1>
                        <text className='contentSubtitle'>Latin Square <br/><br/></text>

                        <text className='contentText'>
                            We employed ten test users, in which 5 test users would be given Prototype A and the
                            remaining 5 would be given Prototype B. After conducting the first round of testing,
                            the prototypes are rotated between the two test users, where they will go through the
                            same manner of testing.
                        </text>
                    </div>

                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentTitle"> 2)Dependent Variable</h1>
                        <text className='contentSubtitle'>1)Time Taken to complete task <br/><br/> </text>

                        <text className='contentText'>
                            Using the time taken is a good indication of how intuitive our user interface is.
                            The longer average time taken to complete each task given connotes an underlying issue
                            with the given prototype.<br/><br/>
                        </text>

                        <text className='contentSubtitle'>2)Difficulty Matrix <br/><br/> </text>

                        <text className='contentText'>
                            All users are given a matrix form where they are supposed to rate each task done
                            with a rating of Easy, Medium, Difficult. This provides us with a good overview on
                            what are some of the tasks that they find difficult in particular. It also highlights
                            the good aspects of our prototype when our target users manage to navigate around our
                            prototype with ease.
                        </text>

                    </div>
                </div>

                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentTitle"> 3)Control Variable </h1>

                        <text className='contentText'>
                            All test users will be issued with the same set of tasks as well as getting solely
                            IOS users to partake in our testing.
                        </text>
                    </div>

                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentTitle"> 4)Random Variable</h1>

                        <text className='contentText'>
                            The tech-savviness level of the 10 test users.
                        </text>
                    </div>
                </div>

                <div style={{padding:"0 5% 0 5%"}}>
                    <text className='contentText'>
                        Our controlled experiment then tested for this: Prototype A is better than Prototype B in
                        ease of navigation and intuitiveness under the context of new users navigating around our
                        prototype and creating new shopping lists based on how quickly they manage to complete certain
                        tasks and their difficulty matrix. However, there is some functionality that our test users liked
                        in Prototype B. Therefore, we have incorporated the changes from both Prototype A and B.<br/><br/>

                        With the combination of all the preferred changes, it will undeniably demonstrate an immense
                        improvement on the new prototype over the old one.
                    </text>
                </div>

            </div>

        {/*    Summary Section -------------------------------------------------------__--_-_--_-_-__-_-_-__-_-_-_-_--_-_-_--*/}

            <div className='userTesting'>
                <h1 className='contentTitle'>Summary of Findings from Testing</h1>

                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #1 - Lack of demarcation between different components of the application</h1>

                        <text className='contentText'>
                            Users feel that the Shopping List functionality view has relatively less contrast and the
                            different components such as the headers, items all blend in together without clear
                            demarcation. This renders the users to feel that it is difficult to get a sufficient
                            understanding of what is presented at a single glance, making the user experience poorer
                            than desired. <br/><br/>

                            For example, Shopping List view has relatively less contrast and the different components
                            such as the headers, items all blend in together without clear demarcation and separation.
                            This renders the users feeling that it is difficult to get a sufficient understanding of
                            what is presented at a single glance, making the user experience poorer than desired.
                        </text>
                    </div>

                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #2 - Users are very guided by colour differences, so fun and bright colour schemes are suggested</h1>

                        <text className='contentText'>
                            Users are guided by colour to differentiate different functions, such as the plus and minus
                            buttons and using colour to highlight different functions will aid in making the usage of
                            the application a more intuitive one.
                        </text>

                    </div>
                </div>


                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #3 - Users like the idea of the navigation path but feel that alert to the location pin can be stronger</h1>

                        <text className='contentText'>
                            Users are receptive towards having a shopping route made for them, especially in times when
                            they are in a rush. However, there needs to be a stronger design of the Map Pin to direct
                            the user's attention to that particular spot and prompt the users to tap on and access the
                            functionalities.
                        </text>
                    </div>

                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #4 - There are some icons that can be confusing in what they mean</h1>

                        <text className='contentText'>
                            Users find that the edit items button of the Shopping List might not be intuitive and might
                            confuse it for other functions. Some of the users are not very receptive to the home button
                            and search buttons of the bottom navigation bars. Labels or more intuitive icons can be used.
                        </text>

                    </div>
                </div>



                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #5 - Users love multiple ways to achieve a single function</h1>

                        <text className='contentText'>
                            Users appreciate having multiple ways to access a single function and love the idea of View
                            Path in tandem with the Navigation Route. Moreover, they are appreciative of features that
                            can be accessed through the Bottom Navigation Bar as well as through another feature itself.
                            This is provided that the multiple functions do not clash with one another.
                        </text>
                    </div>

                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #6 - Users are attentive to application's feedback</h1>

                        <text className='contentText'>
                            Users find that alerts and changes in colour upon selecting something is desirable as it
                            helps them confirm their own actions and reverse any user errors especially with regards to
                            the Undo Buttons, and the confirmation pop-ups.
                        </text>

                    </div>
                </div>

                <div className='variables'>
                    <div style={{padding:"0 5% 0 5%"}}>
                        <h1 className="contentSubtitle"> Finding #7 - Users are not always explorative</h1>

                        <text className='contentText'>
                            Users tend to be very careful with what they tap or click on, hence some features may not
                            be discovered by them if there are insufficient visual cues to indicate them. This prompts
                            the reconsideration of the necessity for users to have to explore or perform an action to
                            discover other subsequent actions.
                        </text>
                    </div>

                </div>

            </div>

        </div>

    )
}


export default TestingContent;