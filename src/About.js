import React from 'react';
import './App.css';
import pic1 from './About1.jpg';
import pic2 from './About2.jpg';
import Topbar from './Topbar';
import { AnimatePresence, motion } from 'framer-motion';

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
                        <div className="subheader2">Who am I?</div>
                        <div className="paragraph1">
                            My name is Tracy. I am a psychotherapist. I like doing psychotherapist things.
                        </div>
                        <div>
                            <div className="subheader2">Education & Training</div>
                            <div className="paragraph1">I went to a school. I am a registered Psychotherapist with a Masters of Arts in counseling.</div>
                        </div>
                    </div>
                    <img src={pic1} alt="image" width="40%" className="image1" />
                </div>
                <div className="about-container">
                    <img src={pic2} alt="image" width="40%" className="image1" />
                    <div>
                        <div className="subheader2">Who am I?</div>
                        <div className="paragraph1">
                            My name is Tracy. I am a psychotherapist. I like doing psychotherapist things.
                        </div>
                        <div>
                            <div className="subheader2">Education & Training</div>
                            <div className="paragraph1">I went to a school. I am a registered Psychotherapist with a Masters of Arts in counseling.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default About;