import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import menu from './menu-icon.png';
import logo from './Logo-No-Background.png';
import title from './Tall-Tree-Lettering-No-Background.png';
import SideNavbar from './SideNavbar';
import Slide from '@material-ui/core/slide';
import { Spin as Hamburger } from 'hamburger-react';

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
                <div>
                <div className="logo-title">
                    <Link to='/'><img src={logo} alt="Logo" className="top-logo"/></Link>
                    <Link to='/'><img src={title} alt="Title" className="top-title"/></Link>
                </div>
                    <div className="view-mob">Tracy Bertrim, M.A., RP</div>
                </div>
                <button className="menu-button" onClick={this.toggleSide}><Hamburger color="grey" direction="right"/></button>
                <div className="topbar-info">
                    <div>Tracy Bertrim, M.A., RP</div>
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