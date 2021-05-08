import React from 'react';
import './App.css';
import pic1 from './About1.png';

class About extends React.Component {
    render() {
        return(
            <div>
                <div className="header1">About Me</div>
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
            </div>
        )
    }
}

export default About;