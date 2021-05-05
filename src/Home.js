import React from 'react';
import './App.css';
import logo from './TTP_Logo_PNG.png';
import title from './TTP_Words.png';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="header-container">
                    <img src={logo} alt="Logo" width="200px" className="logo"/>
                    <img src={title} alt="Title" className="title"/>
                </div>
                <div className="information">
                    <div className="name">Tracy Bertrim, MA, RP</div>
                    <div className="contact">www.talltreepsychotherapy.ca</div>
                    <div className="contact">tracy@talltreepsychotherapy.ca</div>
                    <div className="contact">416.995.8006</div>
                </div>
                <Link to='/contact' className="nav-item"><button className="home-button">GET IN TOUCH</button></Link>
            </div>
        )
    }
}

export default Home;