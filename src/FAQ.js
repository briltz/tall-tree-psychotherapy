import React from 'react';
import './App.css';
import pic1 from './FAQ1.png';
import pic2 from './FAQ2.png';

class FAQ extends React.Component {
    render() {
        return(
            <div>
                <div className="header1">Common Questions</div>
                <div className="faq-container">
                    <div>
                        <div className="subheader2">What is your dog's name?</div>
                        <div className="paragraph1">
                            My dog's name is Mara. She is a good doggy.
                        </div>
                    </div>
                    <img src={pic1} alt="image" width="40%" className="image1" />
                </div>
                <div className="faq-container">
                    <img src={pic2} alt="image" width="40%" className="image1" />
                    <div>
                        <div className="subheader2">What is your cat's name?</div>
                        <div className="paragraph1">
                            My cat's name is Georgia. She is a good kitty cat.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ;