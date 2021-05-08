import React from 'react';
import './App.css';
import pic1 from './Learn1.png';
import pic2 from './Learn2.png';

class Learn extends React.Component {
    render() {
        return(
            <div>
                <div className="header1">What is Psychotherapy?</div>
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
            </div>
        )
    }
}

export default Learn;