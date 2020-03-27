import React from 'react';
import './css/sideNav.scss';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';



// import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import nav_icon from "../assets/icons/icon-nav.png";
import { isLoggedIn, removeToken } from '../utils/auth';
import {
    HOMEPAGE_URL,
    PIZZAMENU_URL,
    BUILDPIZZA_URL,
    SHOPPINGCART_URL
 } from '../routes/URLMaps';




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

const logout = history => {
	removeToken();
	history.push(HOMEPAGE_URL);
};



const SideNav = props => {

    // if (!isLoggedIn()) return null;

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
                            <li><NavLink   to={HOMEPAGE_URL} className="link">HOME</NavLink></li>
                            <li><NavLink   to={PIZZAMENU_URL} className="link">PIZZA MENU</NavLink></li>
                            <li><NavLink   to={BUILDPIZZA_URL} className="link">PIZZA BUILDER</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">BLOG</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">PAGES</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">ABOUT US</NavLink></li>
                            <li><NavLink   to="/homepage" className="link">CONTACT</NavLink></li>
                            <hr />
                   
                            <li><NavLink   to="/homepage" className="link">MY ACCOUNT</NavLink></li>
                            <li><NavLink   to={SHOPPINGCART_URL} className="link">CHECKOUT</NavLink></li>
                            
                            <li><NavLink   to="/login" className="link">LOG IN</NavLink></li>  
                            
                            
                            <Button onClick={() => logout(props.history)} className="nav-logout">
				                Log out
			                </Button>       
                    </ul>
                    </NavContainer>
                </div>
            </div>

        </div>
    )
}

export default withRouter(SideNav);