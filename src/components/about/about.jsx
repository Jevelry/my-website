import "./about.css"
import Me from "../../img/me-waterfall.jpg"


import { ThemeContext } from "../../context";
import { useContext, useRef, useState } from "react";

const About = () => {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="a" id = "about-me">
            
                <div className="a-left">
                <div className="a-card bg" style={{ backgroundColor: darkMode && "white" }}></div>
                    <div className="a-card" >
                        <img src={Me}
                        alt="" 
                        className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                <div className="a-bg" style={{ backgroundColor: darkMode && "black" }}></div>
                    <div className="a-about">
                        <h1 className="a-title">ABOUT ME</h1>
                        
                        <p className="a-desc">
                            <p>Hey I'm Kevin, an aspiring network engineer based in Sydney</p>
                            <br/>
                            I'm currently studying a <strong>B.S. in Computer Science</strong> at the 🎓 
                            <strong> University of New South Wales. </strong>
                            
                            This year, I am seeking an intership to gain 🔬 industry experience and 📚 bolster my skillset 

                        </p>
                    </div>
                </div>
            
        </div>
    )
}

export default About
