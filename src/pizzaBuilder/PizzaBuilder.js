
import React from 'react';
import './css/pizzaBuilder.scss';

import TopBar from '../utils/TopBar';
import Header from './Header';
import Building from './Building';
// import Ingredients from './Ingredients';
// import InfoBoard from  './InfoBoard';
// import Contacts from './Contacts';
// import Footer from '../utils/Footer';


const PizzaBuilder = () => {
    return(
        <div className="pizzaBuilder">
            <div>
                <TopBar />
                <Header />
                <Building />
                {/* <Ingredients /> */}
                {/* <InfoBoard /> */}
                {/* <Footer /> */}
            </div>
        </div>

    );
}
 


export default PizzaBuilder;

