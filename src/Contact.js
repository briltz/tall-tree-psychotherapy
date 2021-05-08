import React from 'react';
import './App.css';
import Form from './ContactForm';

class Contact extends React.Component {

    render() {
        return(
            <div>
                <div className="header1">Contact</div>
                <Form />
                <div>
                    <div className="contact-info">Email: tracy@talltreepsychotherapy.ca</div>
                    <div className="contact-info">Phone: 416-995-8006</div>
                </div>
            </div>
        )
    }
}

export default Contact;