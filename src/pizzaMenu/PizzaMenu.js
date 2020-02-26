import React from 'react';

import TopBar from '../UI/TopBar';
import Footer from '../UI/Footer';
import MenuHeader from './components/MenuHeader';
import MenuBook from './components/MenuBook';

import './css/pizzaMenu.scss'



const PizzaMenu = () => {
    return(
        <div className="pizzaMenu" >
            <TopBar />
            <MenuHeader />
            <MenuBook />
            <Footer />
        </div>

    );
}
 


export default PizzaMenu;

