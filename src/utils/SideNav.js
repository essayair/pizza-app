import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

const NavContainer = styled.ul`
    display:flex;
    flex-direction: column;
    // color: ${ props => props.isRed && 'red' };
    list-style: none;
    a {
        text-decoration: none;
    }
`;

const SideNav = () => {


    return (
        <nav>
            <ul>
                <NavContainer >
                    <li><NavLink    to="/homepage">Home</NavLink></li>
                    <li><NavLink    to="/pizzaMenu">PIZZA MENU</NavLink></li>
                    <li><NavLink   to="/pizzaBuilder">PIZZA BUILDER</NavLink></li>
                    <li><NavLink    to="/homepage">BLOG</NavLink></li>
                    <li><NavLink   to="/homepage">PAGES</NavLink></li>
                    <li><NavLink   to="/homepage">ABOUT US</NavLink></li>
                    <li><NavLink  to="/homepage">CONTACT</NavLink></li>
                    <hr />
                    <li><NavLink    to="/homepage">LOGIN</NavLink></li>
                    <li><NavLink   to="/homepage">MY ACCOUNT</NavLink></li>
                    <li><NavLink    to="/homepage">CHECKOUT</NavLink></li>


                    {/* <button onClick={() => props.history.push('/students')}>go to students</button> */}
                </NavContainer>
            </ul>
        </nav>
    )
}

export default withRouter(SideNav);