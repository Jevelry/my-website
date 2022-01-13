import "./contact.css";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
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
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon" />
                            0420987677
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src = {Email} alt = "" />
                            kevin.huang6541@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            19 Bowen Street
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story</b> Get in touch. Always be
                        freelancing if the right project comes along.
                    </p> 
                    <form ref={formRef} onSubmit={handleSubmit}>  
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows = "5" placeholder="Message" name = "message"/>
                        <button>Submit</button>
                        {done && "  Done!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
