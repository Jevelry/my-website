import "./intro.css"
import Face from "../../img/face.png"
import Logo from "../../img/logo.png"

function intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">    
                    <img src={Logo} alt="logo" className="i-logo" />
                    <h1 className="i-name">KEVIN
                    <br/>HUANG
                    </h1>
                    
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Comp-Sci Student</div>
                            <div className="i-title-item">Aspiring Engineer</div>

                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="navbar">
                    <ul className="i-nav">
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#software">Software</a>
                        </li>
                        <li>
                        <a href="#contact">Contact</a>
                        </li>
                    </ul>
                   
                </div>
                {<img src={Face} alt="" className="i-img" />}
            </div>
        </div>
    )
}

export default intro
