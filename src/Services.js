import React from 'react';
import './App.css';
import pic1 from './Services4.jpg';
import pic2 from './FAQ1.png';

class Services extends React.Component {
    render() {
        return(
            <div>
                <div className="header-image">
                    <div className="services1">Services</div>
                </div>
                <div className="services-container">
                    <div>
                        <div className="subheader2">Assessment</div>
                        <div className="paragraph1">
                            I offer awesome professional psycotherapy services. I will help your mental health!! WOOOOOOOO Come talk to me and I will therapize you!!!
                        </div>
                    </div>
                    <img src={pic1} alt="image" width="40%" className="image1" />
                </div>
                <div className="services-container">
                    <img src={pic2} alt="image" width="40%" className="image1" />
                    <div>
                        <div className="subheader2">Remote Therapy Sessions</div>
                        <div className="paragraph1">
                            Remote sessions on Zoom are sickkk bro. Come chill with me online :) You will recieve the best online therapy you've ever had or your money back guaranteed!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;