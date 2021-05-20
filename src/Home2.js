import React from 'react';
import './App.css';
import logo from './TTP_Logo_PNG.png';
import {Link} from 'react-router-dom';
import HomePic from './Services1.png';
import AboutPic from './About2.jpg';
import LearnPic from './LearnMain.jpg';
import ServicesPic from './Services4.jpg';
import FAQPic from './FAQMain.jpg';
import ContactPic from './ContactMain.png';

class Home2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pic: HomePic
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
            pic: HomePic
        });
    }

    switchAbout () {
        this.setState({
            pic: AboutPic
        });
    }

    switchLearn () {
        this.setState({
            pic: LearnPic
        });
    }

    switchServices () {
        this.setState({
            pic: ServicesPic
        });
    }

    switchFAQ () {
        this.setState({
            pic: FAQPic
        });
    }

    switchContact () {
        this.setState({
            pic: ContactPic
        });
    }

    render() {
        return(
            <div>
                <div className="home-container">
                    <div className="home-nav">
                        <img src={logo} alt="logo" height="80px" />
                        <div className="home-items">
                            <Link to='/about' className="home-item" onMouseOver={this.switchAbout}>ABOUT ME</Link>
                            <Link to='/learn' className="home-item" onMouseOver={this.switchLearn}>WHAT IS PSYCHOTHERAPY?</Link>
                            <Link to='/services' className="home-item" onMouseOver={this.switchServices}>SERVICES</Link>
                            <Link to='/faq' className="home-item" onMouseOver={this.switchFAQ}>FAQ</Link>
                            <Link to='/contact' className="home-item" onMouseOver={this.switchContact}>CONTACT</Link>
                        </div>
                    </div>
                    <div className="home-pic" onMouseOver={this.switchHome}>
                        <img src={this.state.pic} alt="home" height="70%" className="home-img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home2;