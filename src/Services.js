import React from 'react';
import './App.css';
import pic1 from './Services4.jpg';
import pic2 from './FAQ1.jpg';
import Topbar from './Topbar';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { services1, services2, services3 } from './TextContent.json';
import {Link} from 'react-router-dom';

class Services extends React.Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Topbar />
                <div className="header-image">
                    <div className="services1">Services</div>
                </div>
                <div className="services-container">
                    <div>
                        <div className="paragraph1">
                            {services1}
                        </div>
                        <div className="paragraph1">
                            <ul>
                                <li>Trauma and PTSD</li>
                                <li>Adjustment Disorder</li>
                                <li>Posttraumatic Stress Disorder with frontline workers and first responders</li>
                                <li>Attention Deficit Hyperactivity Disorder</li>
                                <li>Anxiety, worry, and panic</li>
                                <li>Depression</li>
                                <li>Life transitions</li>
                                <li>Assertiveness</li>
                                <li>Anger management and emotion regulation</li>
                                <li>Grief and loss</li>
                                <li>Communication</li>
                                <li>Personality Disorders</li>
                                <li>Autism Spectrum Disorder</li>
                            </ul>
                        </div>
                    </div>
                    <img src={pic1} alt="image" width="40%" className="image1 serv-img" />
                </div>
                <div className="services-container">
                    <img src={pic2} alt="image" width="40%" className="image1 dis-mob" />
                    <div>
                        <div className="paragraph1">
                            For the time being, all services will be provided <u>virtually or by phone</u>. I use a virtual platform that is PIPEDA and HIPAA compliant and all privacy and security measures are taken.
                        </div>
                        <div className="paragraph1">
                            {services3}
                        </div>
                        <div><Link to='/contact' className="contact-submit contact-me">Contact me for more information</Link></div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        )
    }
}

export default Services;