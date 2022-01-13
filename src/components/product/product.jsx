import "./product.css"
import Cat from "../../img/cat.png"

const product = () => {
    return (
        <div class="sw-projects-cards" id="sw-projects-card2">
            <div class="card-content">

                <div class="sw-projects-title-container">
                    <div class="sw-project-title card-title">Quantum Mechanical Keyboard Firmware</div>
                </div>
                <div class="sw-projects-content">
                    <div class="sw-projects-img-container">
                        <img class="sw-projects-img" src={Cat} alt="cat"/>
                    </div>
                    <div class="sw-projects-info-container">
                        <div class="sw-projects-text">
                            <ul>
                                <li>Created custom keyboard firmware in C for my personal keyboard that provides
                                    extraordinary functionality and control of the keyboard with features such as custom
                                    macros, unlimited function layers, dual mode keys, RGB lighting control, and
                                    emulating mouse movement.
                                </li>
                            </ul>
                        </div>
                        <div class="sw-projects-button-row">
                            <button type="button" class="button sw-projects-button" onclick="window.open('https://github.com/CampAsAChamp/qmk_firmware', '_blank'); return false">
                                View Code
                                <img class="github-button-icon" src="./assets/Dev Icons/White/Github Logo.svg" alt="Github Icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product

