import React from 'react';
import './App.css';
import pic1 from './LearnMain.jpg';
import pic2 from './About1.jpg';
import Topbar from './Topbar';
import { AnimatePresence, motion } from 'framer-motion';

class Learn extends React.Component {
    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Topbar />
                <div className="header-image3">
                    <div className="services2">What is Psychotherapy?</div>
                </div>
                <div className="learn-container">
                    <div>
                        <div className="subheader2">What Can I Expect From a Psychotherapy Session?</div>
                        <div className="paragraph1">
                        Psychotherapy (also psychological therapy or talking therapy) is the use of psychological methods, particularly when based on regular personal interaction with adults, to help a person change behavior and overcome problems in desired ways. Psychotherapy aims to improve an individual's well-being and mental health, to resolve or mitigate troublesome behaviors, beliefs, compulsions, thoughts, or emotions, and to improve relationships and social skills.
                        </div>
                    </div>
                    <img src={pic1} alt="image" width="40%" className="image1"/>
                </div>
                <div className="learn-container">
                    <img src={pic2} alt="image" width="40%" className="image1"/>
                    <div>
                        <div className="subheader2">What Different Types of Phychotherapy are There?</div>
                        <div className="paragraph1">
                        Psychotherapy (also psychological therapy or talking therapy) is the use of psychological methods, particularly when based on regular personal interaction with adults, to help a person change behavior and overcome problems in desired ways. Psychotherapy aims to improve an individual's well-being and mental health, to resolve or mitigate troublesome behaviors, beliefs, compulsions, thoughts, or emotions, and to improve relationships and social skills.
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Learn;