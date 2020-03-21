
import React from 'react';
import './css/pizzaBuilder.scss';

import TopBar from '../components/TopBar';
import Header from './Header';
import Building from './Building';
// import Contacts from './Contacts';
import Footer from '../components/Footer';


const BuildPizza = () => {
    return(
        <div className="pizzaBuilder">
            <div>
                <TopBar />
                <Header />
                <Building />
                <Footer />
            </div>
        </div>

    );
}
 


export default BuildPizza;

