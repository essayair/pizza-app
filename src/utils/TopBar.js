import React from 'react';

import sideNav from "../assets/icons/icon-nav.png";
import cart from "../assets/icons/icon-cart.png";
import logo from "../assets/icons/logo.png";


const TopBar = () => {
    return(
        
        <header className="top-bar">
            <div className="side-nav"> 
                <img src={sideNav}  alt="sideNav" /> 
            </div>
            <div className="logo">
                <img src={logo} alt="logo"   />
            </div>
            <div className="my-cart">
                <img src={cart} alt="mycart" />
            </div>
        </header>




    )
}



export default TopBar;