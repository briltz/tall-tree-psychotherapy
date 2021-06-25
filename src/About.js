import React from 'react';
import './App.css';
import pic1 from './About1.jpg';
import pic2 from './About2.jpg';
import Topbar from './Topbar';
import Footer from './Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { about1, about2, about3, about4, about5, about6 } from './TextContent.json';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Topbar />
                <div className="header-image5">
                    <div className="services1">About Me</div>
                </div>
                <div className="about-container">
                    <div>
                        <div className="paragraph2">
                            {about1}
                        </div>
                        <div className="paragraph1">
                            {about2}
                        </div>
                        <div className="paragraph1">
                            {about3}
                        </div>
                        <div className="paragraph1">
                            {about4}
                        </div>
                    </div>
                    <img src={pic1} alt="image" className="image1 dis-mob" />
                </div>
                <div className="about-container">
                    <img src={pic2} alt="image" className="image1" />
                    <div>
                        <div className="paragraph1">
                            {about5}
                        </div>
                        <div className="paragraph1">
                            {about6}
                        </div>
                        <div><Link to='/contact' className="contact-submit contact-me">Contact me for more information</Link></div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        )
    }
}

export default About;