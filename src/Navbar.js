import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './TTP_Logo_PNG.png';

class Navbar extends React.Component {
    render() {
        return(
            <div class="navbar">
                <Link to='/'><img src={logo} alt="Logo" height="50px"/></Link>
                <div className="nav-items">
                    <Link to='/' className="nav-item">HOME</Link>
                    <Link to='/about' className="nav-item">ABOUT ME</Link>
                    <Link to='/learn' className="nav-item">WHAT IS PSYCHOTHERAPY?</Link>
                    <Link to='/services' className="nav-item">SERVICES</Link>
                    <Link to='/faq' className="nav-item">FAQ</Link>
                    <Link to='/contact' className="nav-item">CONTACT</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;