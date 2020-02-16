import React from 'react';


import base_menu from "../assets/icons/icon-base-menu.png";
import base_cart from "../assets/icons/icon-base-cart.png";
import logo from "../assets/icons/logo.png";


class Header extends React.Component{

    render(){
        return (
            <header>
                <div> 
                    <image className="base_menu" src={ base_menu } alt="base_menu" /> 
                </div>
                <div>
                    <image className="logo" src={ logo } alt="logo" />
                </div>
                <div>
                    <image className="base_cart" src={ base_cart } alt="base_cart" />
                </div>
        
             </header>
        );
    }

}



export default Header;