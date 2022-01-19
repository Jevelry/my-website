import "./product.css"
import Website from "../../img/website.png"
const website = () => {
    return (
        <div class="sw-projects-cards">
            <div class="card-content">

                <div class="sw-projects-title-container">
                    <div class="sw-project-title card-title">Portfolio Website</div>
                </div>
                <div class="sw-projects-content">
                    <div class="sw-projects-img-container">
                        <img class="sw-projects-img" src={Website} alt="website" />
                    </div>
                    <div class="sw-projects-info-container">
                        <div class="sw-projects-text">
                            <ul>
                                <li>React website built to showcase experience and projects I've had over the years  
                                </li>
                                <li>
                                    Website utilises react hooks for dark mode and Emailjs for the email form
                                </li>
                                <li></li>
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

export default website;


