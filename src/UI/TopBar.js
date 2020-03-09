import React from 'react';
// import sideNav from '../utils/SideNav';
// import { link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import logo from "../assets/icons/logo.png";
import SideNav from "./SideNav";
import SideCart from "./SideCart";


import './css/topBar.scss';


const TopBar = () => {
    return(
        <div>
            <div className="top-bar">

                <div className="side_nav"> 
                    <SideNav />
                </div>

                <div className="logo">
                    <NavLink to="/homepage"> 
                        <img src={logo} alt="logo"   />
                    </NavLink>
                </div>
                
                <div className="my_cart">
                    <SideCart />
                </div>
            </div>

        </div>

    )
}



export default TopBar;