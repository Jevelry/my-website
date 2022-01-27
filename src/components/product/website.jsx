import "./product.css"
import Web from "../../img/website.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";const Website = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div class="p" style={{ backgroundColor: darkMode && "rgb(51, 51, 51)" }}>
            <div className="p-block">
                <div class="p-title">
                    <h1><b>Portfolio Website</b></h1>
                </div>

                <div class="p-content">
                    <div class="p-img-wrapper">
                        <img class="p-img" src={Web} alt="website" />
                    </div>
                    <div class="p-info-wrapper"> 
                        <ul className="p-desc">
                            <li>React website built to showcase my experience and projects I've had over the years  
                            </li>
                            <li>
                                Website utilises react hooks for dark mode and EmailJs for the email form
                            </li>
                            <li>
                                Hosted via GitHub pages
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
                            window.open('https://www.github.com/Jevelry/my-website', "_blank");
                        }}
                    > <p>VIEW CODE</p>
                    </button>
                </div>
                
            </div>            
        </div>
    )
}

export default Website;


