import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import menu from './menu-icon.png';
import logo from './TTP_Logo_PNG.png';
import title from './TTP_Words1.png';
import SideNavbar from './SideNavbar';
import Slide from '@material-ui/core/slide';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: false
        }
        this.toggleSide = this.toggleSide.bind(this);
    }

    toggleSide(){
        this.setState(prevState => ({ side: !prevState.side }));
    }

    render() {
        return(
            <div>
            <div class="topbar">
                <div className="logo-title">
                    <Link to='/'><img src={logo} alt="Logo" height="60px"/></Link>
                    <Link to='/'><img src={title} alt="Title" height="50px"/></Link>
                </div>
                <button className="menu-button" onClick={this.toggleSide}><img src={menu} alt="Menu" height="40px"/></button>
                <div className="topbar-info">
                    <div>Tracy Bertrim, MA, RP</div>
                    <div>tracy@talltreepsychotherapy.ca</div>
                    <div>416-995-8006</div>
                </div>
            </div>
                <Slide direction="right" in={this.state.side} mountOnEnter unmountOnExit><SideNavbar /></Slide>
            </div>
        )
    }
}

export default Topbar;