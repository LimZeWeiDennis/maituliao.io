import React from "react";
import "./Ideation.css";

const KeyProblems = props => {

    return (
        <div className='ideationContent'>

            {/*------------------------------STUDY METHODS FROM HERE ON----------------------------------*/}
            <div className='keyProblems'>

                <div style={{padding:'0 15% 0 15%'}}>
                    <h1 className="keyProblemsTitle"> Identifying Key Problems </h1>
                    <text className='contentText'>
                        After carrying out our user study, we identified some key problems that shoppers face while
                        grocery shopping in supermarkets. From these problems, our team generated 3 user tasks that
                        can be handled by our proposed solution.
                    </text>
                </div>


                <div className='keyProblemsDiv'>
                    <div className='keyProblemsColumn'>
                        <h1 className='contentTitle'> Effective Navigation</h1>
                        <text className='contentText'>
                            Our application should help the user easily navigate supermarkets
                            (especially unfamiliar ones) by providing the shortest path, based on their desired items,
                            to optimize their shopping route.
                        </text>

                    </div>

                    <div className='keyProblemsColumn'>
                        <h1 className='contentTitle'> Shopping Lists</h1>
                        <text className='contentText'>
                            Current shopping lists are static and do not provide extra functionality that empowers the
                            shopper. Our application aims to provide interactive features to enhance the shopping list
                            experience so that the user can be enabled to become a more effective and organized shopper.

                        </text>

                    </div>


                    <div className='keyProblemsColumn'>
                        <h1 className='contentTitle'> Stock Status</h1>
                        <text className='contentText'>
                            When looking for products, shoppers cannot determine if a product is truly out of
                            stock or if the shopper is in the wrong location. This causes the user to request help
                            from staff who are subject to availability. Thus, our application must be able to
                            provide a stock status feature that can inform users whether any of their desired
                            products are out of stock, reducing unnecessary trips to the supermarket.
                        </text>

                    </div>


                </div>

                <div style={{padding:'10% 15% 0 15%'}}>
                    <h1 className="keyProblemsTitle"> Brainstorming </h1>
                    <text className='contentText'>
                        Our team underwent a brainstorming session to generate numerous ideas to target and
                        address the different user tasks that we generated.
                    </text>
                </div>
            </div>

        </div>

    )
}


export default KeyProblems;