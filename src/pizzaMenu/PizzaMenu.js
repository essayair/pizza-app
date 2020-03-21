import React from 'react';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MenuHeader from './sections/MenuHeader';
import MenuBook from './sections/MenuBook';

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

