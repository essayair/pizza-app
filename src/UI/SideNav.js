import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import nav_icon from "../assets/icons/icon-nav.png";

import './css/sideNav.scss';

const NavContainer = styled.ul`
    // display:flex;
    // flex-direction: column;
    // li {
    //     list-style: none;
    // }
    // link {
    //     text-decoration: none;
    //     color: red;
    // }
`;




const SideNav = () => {


    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="nav-icon">
                <img src={nav_icon} alt="sideNav-icon" /> 
                </div>

                <div className="navigation">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <hr />

                    <NavContainer >
                    <ul className="ul">
                            <li><NavLink   to="/homepage" className="link">HOME</NavLink></li>
                            <li><NavLink   to="/pizzaMenu" className="link">PIZZA MENU</NavLink></li>
                            <li><NavLink   to="/buildpizza" className="link">PIZZA BUILDER</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">BLOG</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">PAGES</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">ABOUT US</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">CONTACT</NavLink></li>
                            <hr />
                            <li><NavLink   to="/homepage" className="link">LOGIN</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">MY ACCOUNT</NavLink></li>
                            <li><NavLink   to="/shoppingcart" className="link">CHECKOUT</NavLink></li>
                            {/* <button onClick={() => props.history.push('/students')}>go to students</button> */}
                    </ul>
                    </NavContainer>
                </div>
            </div>

        </div>
    )
}

export default withRouter(SideNav);