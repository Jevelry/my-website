import "./product.css"
import Loop from "../../img/loopmania2.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Loopmania = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div class="p" style={{ backgroundColor: darkMode && "rgb(51, 51, 51)" }}>
            <div className="p-block">

                <div class="p-title">
                    <h1><b>LoopMania</b></h1>
                </div>
                <div class="p-content">
                    <div class="p-img-wrapper">
                        <img class="p-img" src={Loop} alt="Loopmania game"/>
                    </div>
                    <div class="p-info-wrapper">
                        <ul className="p-desc">
                                <li>Designed and implemented a tower defence like game in Java, utilising JavaFx for the frontend 
                                </li>
                                <li>Player travels around a looped path battling enemies
                                    and acquiring gold to upgrade items. Player can purchase 
                                    items from a shop and place towers to help clear the game</li>
                                <li>Coordinated with team members to realize the groups design goals.
                                </li>
                                <li>
                                    Implemented battle logic, enemies, items, buildings and cards in accordance to object-oriented programming principles 
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
                            window.open('github.com/Jevelry/Loopmania', "_blank");
                        }}
                    > <p>VIEW CODE</p>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Loopmania;


