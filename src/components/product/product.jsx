import "./product.css"
import Cat from "../../img/cat.png"
import Git from "../../img/github.svg"
const product = () => {
    return (
        <div class="sw-projects-cards" id="sw-projects-card2">
            <div class="card-content">

                <div class="sw-projects-title-container">
                    <div class="sw-project-title card-title">LoopMania</div>
                </div>
                <div class="sw-projects-content">
                    <div class="sw-projects-img-container">
                        <img class="sw-projects-img" src={Cat} alt="cat"/>
                    </div>
                    <div class="sw-projects-info-container">
                        <div class="sw-projects-text">
                            <ul>
                                <li>Built a tower defence game using Java for the backend 
                                    and JavaFx for the frontend
                                </li>
                                <li>
                                    Player travels around a looped path battling enemies 
                                    and acquiring gold to upgrade items. Player is allowed 
                                    to purchase items from a shop and place towers to help 
                                    clear the game
                                </li>
                                <li>
                                    Constructed various towers, 
                                    enemies and allies in accordance to object-oriented programming principles 
                                </li>
                            </ul>
                        </div>
                        <div class="sw-projects-button-row">
                            <button
                                className="button"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/Jevelry', "_blank");
                                }}
                            > <p>VIEW CODE</p>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default product

