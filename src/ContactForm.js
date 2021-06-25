import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import Contact from './Contact';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            phone: false,
            email: true,
            contact: false
        }
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleContact = this.handleContact.bind(this);
    }

    handlePhone() {
        this.setState({
          phone: !this.state.phone
        })
    }

    handleEmail() {
        this.setState({
          email: !this.state.email
        })
    }

    handleContact() {
        this.setState({
          contact: !this.state.contact
        })
    }

    sendEmail = (e) => {
        e.preventDefault();
        if(this.state.phone === false && this.state.email === false){
            this.setState({
                message: 'Please select at least one method of contact.'
            });
        }
        else{
            this.setState({
                message: 'Sending message...'
            });
            emailjs.sendForm('service_hdyjw5q', 'template_zjvyee5', e.target, 'user_ebmznMDN64Ho5dSu05f3i')
            .then((result) => {
            console.log(result.text);
            this.setState({
                message: 'Thank you for your message. I will respond to you within 24 hours.'
            });
            }, (error) => {
            console.log(error.text);
            this.setState({
                message: 'Error sending email. Please try again later.'
            });
            });
            e.target.reset();
        }
    }

    render() {

        const phoneContent = this.state.phone 
        ? <div><input type="tel" placeholder="Phone Number" className="contact-input" name="phone" required /></div>
        : null;

        const emailContent = this.state.email
        ? <div><input type="email" placeholder="Email" className="contact-input" name="email" required /></div>
        : null;

        return(
            <div>
                <div className="contact-form">
                <form onSubmit={this.sendEmail.bind(this)}>
                    <div><input type="text" placeholder="Name" className="contact-input" name="name" required /></div>
                    <div className="contact-method">
                        <div>Contact Method</div>
                        <div>Email<input type="checkbox" className="contact-checkbox" checked={this.state.email} onChange={this.handleEmail}/></div>
                        <div>Phone<input type="checkbox" className="contact-checkbox" checked={this.state.phone} onChange={this.handlePhone}/></div>
                    </div>
                    {emailContent}
                    {phoneContent}
                    <div><input type="text" placeholder="Subject" className="contact-input" name="subject" required /></div>
                    <div><textarea placeholder="Enter your message..." className="contact-message" rows="8" name="message" required /></div>
                    <div><button type="submit" className="contact-submit">Submit</button></div>
                </form>
                <div>{this.state.message}</div>
                </div>
            </div>
        )
    }
}

export default ContactForm;

/*
<div className="contact-reply">
                        <div>Is it okay to leave a message? <input type="checkbox" className="contact-checkbox" checked={this.state.contact} name="contact" onChange={this.handleContact}/></div>
                    </div>
*/