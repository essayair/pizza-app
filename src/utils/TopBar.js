import React from 'react';

import menu from "../assets/icons/icon-menu.png";
import cart from "../assets/icons/icon-cart.png";
import logo from "../assets/icons/logo.png";


const TopBar = () => {
    return(
        
        <header className="header">
            <div className="menu"> 
                <img src={menu}  alt="menu" /> 
            </div>
            <div className="logo">
                <img src={logo} alt="logo"   />
            </div>
            <div className="cart">
                <img src={cart} alt="cart" />
            </div>
    
        </header>
    )
}



export default TopBar;