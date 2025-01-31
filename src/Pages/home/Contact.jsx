// import { useState } from 'react';
import '../../style/contact.css';
import Contactt from "../../assets/Contact.png";


function Contact() {
 
   return (
     <>
       <div id='Contact' className="contact-section">
            <div className="contact-left">
                <h2>Contact Information</h2>
                <p>For questions, partnership opportunities, or support, feel free to get in touch.</p>
                <img src={Contactt} alt="Contact" />
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" placeholder="Dean" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" placeholder="Duo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="example@gmail.com" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="+91957765456" />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="message" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
        </div>
     </>
   )
 }
 
 export default Contact;