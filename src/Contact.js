import React from 'react';
import './App.css';
import Form from './ContactForm';

class Contact extends React.Component {

    render() {
        return(
            <div>
                <div className="header1">Contact</div>
                <div className="subheader1">Leave me a message! I would love to answer any questions you have. I check my email once every decade.</div>
                <Form />
                <div>
                    <div className="contact-info">Email: tracy@talltreepsychotherapy.ca</div>
                    <div className="contact-info">Phone: 416-995-8006</div>
                    <div><b>Toronto, ON</b></div>
                    <div>123 Sesame Street</div>
                    <div>Office 420</div>
                </div>
            </div>
        )
    }
}

export default Contact;