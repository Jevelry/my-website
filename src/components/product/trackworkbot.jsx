import "./product.css"
import Trackwork from "../../img/trackwork.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";const TrackworkBot = () => {
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
                        <img class="p-img" src={Trackwork} alt="website" />
                    </div>
                    <div class="p-info-wrapper"> 
                        <ul className="p-desc">
                            <li>Simple discord bot that gives advance notice of train trackwork on private server  
                            </li>
                            <li>
                                Extracts and filters data from TFNSW API to determine time/location of trackwork
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
                            window.open('https://github.com/Jevelry/TrackworkBot', "_blank");
                        }}
                    > <p>VIEW CODE</p>
                    </button>
                </div>
                
            </div>            
        </div>
    )
}

export default TrackworkBot;


