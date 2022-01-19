import "./contact.css";

import Github from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";

import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";


const Contact = () => {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rrpnvc1', 'template_85cznz9', formRef.current, 'user_w3DpeD3J4yVUfgTmcF6r3')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">CONTACT ME</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Github} 
                            alt="git" 
                            className="c-icon" />
                            github.com/jevelry
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src = {Email} alt = "email" />
                            kevin.huang6541@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Linkedin} alt="linkedin" />
                            linkedin.com/in/jevelry/
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Send me an email</b> 
                    </p> 
                    <form ref={formRef} onSubmit={handleSubmit}>  
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows = "5" placeholder="Message" name = "message"/>
                        <br/>
                        <button>Submit</button>
                        {done && "   Done!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
