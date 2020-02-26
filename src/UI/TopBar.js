import React from 'react';
// import sideNav from '../utils/SideNav';
// import { link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


// import sideNav from "../assets/icons/icon-nav.png";
import cart from "../assets/icons/icon-cart.png";
import logo from "../assets/icons/logo.png";
import SideNav from "./SideNav";

import './css/topBar.scss';


const TopBar = () => {
    return(
        <div>
            <div className="top-bar">
                <div className="side-nav"> 
                    <SideNav />
                </div>
                <div className="logo">
                <NavLink to="/homepage"> 
                    <img src={logo} alt="logo"   />
                
                </NavLink>
                
                </div>
                <div className="my-cart">
                    <img src={cart} alt="mycart" />
                </div>
            </div>

        </div>

    )
}



export default TopBar;