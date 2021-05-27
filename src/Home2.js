import React from 'react';
import './App.css';
import logo from './TTP_Logo_PNG.png';
import words from './TTP_Words1.png';
import {Link} from 'react-router-dom';
import HomePic from './Services1.jpg';
import AboutPic from './About2.jpg';
import LearnPic from './LearnMain.jpg';
import ServicesPic from './Services4.jpg';
import FAQPic from './FAQMain.jpg';
import ContactPic from './ContactMain.jpg';
import Fade from '@material-ui/core/Fade';
import { AnimatePresence, motion } from 'framer-motion';

class Home2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            home: true,
            about: false,
            learn: false,
            services: false,
            faq: false,
            contact: false
        }
        this.switchAbout = this.switchAbout.bind(this);
        this.switchHome = this.switchHome.bind(this);
        this.switchLearn = this.switchLearn.bind(this);
        this.switchServices = this.switchServices.bind(this);
        this.switchFAQ = this.switchFAQ.bind(this);
        this.switchContact = this.switchContact.bind(this);
    }

    switchHome () {
        this.setState({
            home: true,
            about: false,
            learn: false,
            services: false,
            faq: false,
            contact: false
        });
    }

    switchAbout () {
        this.setState({
            home: false,
            about: true,
            learn: false,
            services: false,
            faq: false,
            contact: false
        });
    }

    switchLearn () {
        this.setState({
            home: false,
            about: false,
            learn: true,
            services: false,
            faq: false,
            contact: false
        });
    }

    switchServices () {
        this.setState({
            home: false,
            about: false,
            learn: false,
            services: true,
            faq: false,
            contact: false
        });
    }

    switchFAQ () {
        this.setState({
            home: false,
            about: false,
            learn: false,
            services: false,
            faq: true,
            contact: false
        });
    }

    switchContact () {
        this.setState({
            home: false,
            about: false,
            learn: false,
            services: false,
            faq: false,
            contact: true
        });
    }

    render() {
        return(
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="title-cont">
                <div className="home-title">
                    <img src={logo} alt="logo" height="100%" />
                    <img src={words} alt="title" height="85%" />
                </div>
                <div className="home-words">Tracy Bertrim, MA, Registered Psychotherapist</div>
                </div>
                <div className="home-container">
                    <div className="home-nav">
                        <div className="home-items">
                            <Link to='/about' className="home-item" onMouseOver={this.switchAbout} onMouseLeave={this.switchHome}>ABOUT ME</Link>
                            <Link to='/learn' className="home-item" onMouseOver={this.switchLearn} onMouseLeave={this.switchHome}>WHAT IS PSYCHOTHERAPY?</Link>
                            <Link to='/services' className="home-item" onMouseOver={this.switchServices} onMouseLeave={this.switchHome}>SERVICES</Link>
                            <Link to='/faq' className="home-item" onMouseOver={this.switchFAQ} onMouseLeave={this.switchHome}>FAQ</Link>
                            <Link to='/contact' className="home-item" onMouseOver={this.switchContact} onMouseLeave={this.switchHome}>CONTACT</Link>
                        </div>
                    </div>
                    <div className="home-pic">
                        <Fade in={this.state.home} timeout={500}><img src={HomePic} alt="home" height="65%" className="home-img" /></Fade>
                        <Fade in={this.state.about} timeout={500}><img src={AboutPic} alt="home" height="65%" className="home-img" /></Fade>
                        <Fade in={this.state.learn} timeout={500}><img src={LearnPic} alt="home" height="65%" className="home-img" /></Fade>
                        <Fade in={this.state.services} timeout={500}><img src={ServicesPic} alt="home" height="65%" className="home-img" /></Fade>
                        <Fade in={this.state.faq} timeout={500}><img src={FAQPic} alt="home" height="65%" className="home-img" /></Fade>
                        <Fade in={this.state.contact} timeout={500}><img src={ContactPic} alt="home" height="65%" className="home-img" /></Fade>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Home2;