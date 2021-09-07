import React from 'react'
import './ContactComponent.css'
import emailjs from "emailjs-com";

export default function ContactComponent() {

    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('stratton', 'template_64jva5n', e.target, 'user_RUuKdJ2GeHqbg1RhTvRbp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (

        <div className="contact">
            <div className="contact__background">
    <form className="contact__form" onSubmit={sendEmail}>
    <h1 contact__form>Contact Us</h1>
            <label> Name </label>
            <input type="text" className="form-control" placeholder="Name" name="name"/>
            <label> Email </label>
            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              <label> Subject </label>
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            <label>Message</label>
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            <button
        type="submit" >
        - SEND -
      </button>
            </form>
            </div>
            <h2 className="Contact__name">STRATTON TERRACE MARKETING</h2>
            <p className='contact__P'>Email: info@strattonterrace.com</p>
            <p className='contact__P'>Mobile: ‪(657) 877-9300</p>
             </div>
        
    )
}


