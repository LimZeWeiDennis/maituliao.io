import React from "react";
import "./Ideation.css";

const Tasks = props => {

    return (
        <div className='ideationContent'>

            {/*------------------------------STUDY METHODS FROM HERE ON----------------------------------*/}
            <div className='keyProblems'>

                <div style={{padding:'0 15% 2% 15%'}}>
                    <h1 className="contentTitle"> Task 1: Effective Navigation </h1>
                    <li className="contentTextBold"> "Aisle Signages"</li>
                    <ul className="contentText">
                        Making Aisle Signages digital with different languages to cater to the different ethnicity
                        groups. This can help everyone better navigate through the supermarket.
                    </ul>

                    <li className="contentTextBold"> "Buzz Tokens"</li>
                    <ul className="contentText">
                        Using Buzz Tokens that gives haptic feedback to the user when the user is near the product
                        that the user is looking for.
                    </ul>

                    <li className="contentTextBold"> "Aisle Music"</li>
                    <ul className="contentText">
                        Using unique short introductory music at every different category aisle, to identify the
                        category of the aisle. This way the users can recognise the aisle just by
                        listening to the music.
                    </ul>

                    <li className="contentTextBold">"Item Finder"</li>
                    <ul className="contentText">
                        By placing an interactive directory at the entrance of the supermarket. Users can use this
                        directory to search for the location of the items in the supermarket.
                    </ul>

                    <li className="contentTextBold">"AR/VR direction guider”</li>
                    <ul className="contentText">
                        An interactive application that has an Augmented Reality that can be used to guide the user
                        to the location of the required product.
                    </ul>
                </div>

                <div style={{padding:'2% 15% 2% 15%'}}>
                    <h1 className="contentTitle"> Task 2:Shopping Lists </h1>
                    <li className="contentTextBold"> “Auto Sorting”</li>
                    <ul className="contentText">
                        A shopping list that can automatically sort all the items in the shopping list by the category.
                        This way users will be able to find multiple items of the same category in the same area
                        much faster.
                    </ul>

                    <li className="contentTextBold"> “Image Display”</li>
                    <ul className="contentText">
                        A shopping list that displays the image of the product that is in the shopping list.
                        This makes the shopping list more visual and easier to search and remove
                        items from the shopping list.
                    </ul>

                    <li className="contentTextBold">“Ingredient Browser”</li>
                    <ul className="contentText">
                        An application that allows the users to browse through the ingredient list of products,
                        so as to easily find the desired type of product.
                    </ul>

                    <li className="contentTextBold"> "Auto Calculator”</li>
                    <ul className="contentText">
                        A shopping list that automatically calculates the total cost of all the products in the list,
                        that offsets the offers and promotions that are present. This allows the user to better keep
                        track of his expenses.
                    </ul>

                    <li className="contentTextBold">“Number Left”</li>
                    <ul className="contentText">
                        A shopping list that shows the number of items left in the list that is not checked off.
                        This to allow the user to better gauge how much more time the user might have to spend
                        shopping.
                    </ul>
                </div>

                <div style={{padding:'2% 15% 2% 15%'}}>
                    <h1 className="contentTitle"> Task 3:Stock Status</h1>
                    <li className="contentTextBold"> “Warning”</li>
                    <ul className="contentText">
                        A red LED light that shows up when the shelf containing the product is empty.
                        This warns the user from a distance that the product might be out of stock
                    </ul>

                    <li className="contentTextBold"> “Stock Tracker”</li>
                    <ul className="contentText">
                        An application that allows the user to check if there is stock for a particular product in
                        the neighboring supermarkets.  This is to reduce chances of the user making a wasted
                        trip to the supermarket.
                    </ul>

                    <li className="contentTextBold">“Gamification”</li>
                    <ul className="contentText">
                        A game that will be available when the user is waiting for the stock to be
                        stocked up. This game will serve as a reminder for the user that the out of stock items
                        are being stocked up at the moment.
                    </ul>

                    <li className="contentTextBold"> "Notification”</li>
                    <ul className="contentText">
                        An application that warns the user about low stocks about the product with
                        the use of notifications.
                    </ul>

                    <li className="contentTextBold">“Number Left”</li>
                    <ul className="contentText">
                        A shopping list that shows the number of items left in the list that is not checked off.
                        This to allow the user to better gauge how much more time the user might have to spend
                        shopping.
                    </ul>
                </div>


            </div>

        </div>

    )
}


export default Tasks;