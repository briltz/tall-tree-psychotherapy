import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './TTP_Logo_PNG.png';

class Navbar extends React.Component {
    render() {
        return(
            <div class="navbar">
                <a href=""><img src={logo} alt="Logo" height="50px"/></a>
                <div className="nav-items">
                    <Link to='/' className="nav-item">HOME</Link>
                    <Link to='/contact' className="nav-item">CONTACT</Link>
                    <Link to='/about' className="nav-item">ABOUT ME</Link>
                    <Link to='/services' className="nav-item">SERVICES</Link>
                    <Link to='/pricing' className="nav-item">PRICING</Link>
                    <Link to='/faq' className="nav-item">FAQ</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;