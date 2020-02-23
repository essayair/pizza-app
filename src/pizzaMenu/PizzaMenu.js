import React from 'react';

import TopBar from '../UI/TopBar';
import Footer from '../UI/Footer';
import MenuHeader from './MenuHeader';
import MenuBook from './MenuBook';



const PizzaBuilder = () => {
    return(
        <div>
            <TopBar />
            <MenuHeader />
            <MenuBook />
            <Footer />
        </div>

    );
}
 


export default PizzaBuilder;

