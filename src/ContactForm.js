import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import Contact from './Contact';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7u3xx4f', 'template_jlxdog6', e.target, 'user_rOlcwNHj5N8gq6GYBPeyK')
        .then((result) => {
          console.log(result.text);
          this.setState({
              message: 'Email sent successfully!'
          });
        }, (error) => {
          console.log(error.text);
          this.setState({
            message: 'Error sending email. Please try again later.'
          });
        });
        e.target.reset();
    }

    render() {
        return(
            <div>
                <div className="contact-form">
                <form onSubmit={this.sendEmail.bind(this)}>
                    <div><input type="text" placeholder="Name" className="contact-input" name="name" required /></div>
                    <div><input type="email" placeholder="Email" className="contact-input" name="email" required /></div>
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