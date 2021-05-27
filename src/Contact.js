import React from 'react';
import './App.css';
import Form from './ContactForm';
import Topbar from './Topbar';
import { AnimatePresence, motion } from 'framer-motion';

class Contact extends React.Component {

    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Topbar />
                <div className="header-image6">
                    <div className="services1">Contact</div>
                </div>
                <Form />
                <div>
                    <div className="contact-info">Email: tracy@talltreepsychotherapy.ca</div>
                    <div className="contact-info">Phone: 416-995-8006</div>
                </div>
            </motion.div>
        )
    }
}

export default Contact;