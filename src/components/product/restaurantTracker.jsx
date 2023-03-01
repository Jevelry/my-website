import "./product.css"
import Restaurant from "../../img/restaurant.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";const RestaurantTracker = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div class="p" style={{ backgroundColor: darkMode && "rgb(51, 51, 51)" }}>
            <div className="p-block">
                <div class="p-title">
                    <h1><b>Restaurant Tracker</b></h1>
                </div>

                <div class="p-content">
                    <div class="p-img-wrapper">
                        <img class="p-img" src={Restaurant} alt="website" />
                    </div>
                    <div class="p-info-wrapper"> 
                        <ul className="p-desc">
                            <li>Developed website to track restaurants people have visited  
                            </li>
                            <li>
                                Users can submit a review form and view the database of reviews
                            </li>
                            <li>
                                Stack consists of Express.js backend and react frontend. Used google sheets to store data via Google API
                            </li>
                        </ul>               
                    </div>
                </div>

                <div class="p-button-wrapper">
                    <button
                        className="p-button"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open('https://github.com/Jevelry/restaurant-tracker', "_blank");
                        }}
                    > <p>VIEW CODE</p>
                    </button>
                </div>
                
            </div>            
        </div>
    )
}

export default RestaurantTracker;


