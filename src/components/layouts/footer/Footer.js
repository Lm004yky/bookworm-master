import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <footer>
            

            <section className="footer-container">
                <div className="container">
                    <h2>If you have any queries feel free to ask here.</h2>

                    <form onSubmit={handleSubmit} ref={form} className="footer-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="query" className="form-label">Query:</label>
                            <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Submit" className="form-submit" />
                        </div>
                    </form>

                    
                </div>
            </section>

            <div className="footer_main">
            <div className="tag">
    <h1>Location</h1>
    <a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Almaty, Zhandosova/Manasa, 29</a>
</div>

<div className="tag">
    <h1>Contact Info</h1>
    <a href="#"><FontAwesomeIcon icon={faPhone} /> +7 778 778 78 71</a>
    <a href="#"><FontAwesomeIcon icon={faEnvelope} /> bookstore123@gmail.com</a>
</div>

<div className="tag">
    <h1>Follow Us</h1>
    <div className="social_link">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
</div>
         
            </div>
        </footer>
    )
}

export default Footer;
