import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import menu from './menu-icon.png';

class SideNavbar extends React.Component {
    render() {
        return(
            <div class="side-navbar">
                <div className="side-items">
                    <div className="side-container"><Link to='/' className="side-item">HOME</Link></div>
                    <div className="side-container"><Link to='/about' className="side-item">ABOUT ME</Link></div>
                    <div className="side-container"><Link to='/learn' className="side-item">WHAT IS PSYCHOTHERAPY?</Link></div>
                    <div className="side-container"><Link to='/services' className="side-item">SERVICES</Link></div>
                    <div className="side-container"><Link to='/faq' className="side-item">FAQ</Link></div>
                    <div className="side-container"><Link to='/contact' className="side-item">CONTACT</Link></div>
                </div>
            </div>
        )
    }
}

export default SideNavbar;