import "./product.css"
import tcp from "../../img/tcp.png"
import { ThemeContext } from "../../context";
import { useContext } from "react";const Tcp = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div class="p" style={{ backgroundColor: darkMode && "rgb(51, 51, 51)" }}>
            <div className="p-block">

                <div class="p-title">
                    <h1><b>TCP over UDP</b></h1>
                </div>

                <div class="p-content">
                    <div class="p-img-wrapper">
                        <img 
                        class="p-img" 
                        src={tcp} 
                        alt="Loopmania game" />
                    </div>
                    <div class="p-info-wrapper">
                        <ul className="p-desc">
                            <li>
                                Created python program to implement reliable transport protocol over the UDP protocol
                            </li>
                            <li>
                                Protocol allows for transport of text files from sender to receiver
                            </li>
                            <li>
                                Program contains a parameter to simulate packet loss. All transmissions are logged
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
                            window.open('github.com/Jevelry/TCP-over-UDP', "_blank");
                        }}
                    > <p>VIEW CODE</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Tcp;


