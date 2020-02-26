
import React from 'react';
// import '../css/menuBook.css';

import OnePizza from "./OnePizza";
import Filter from './Filter';

const MenuBook = () => {
    return(
        <div className="menu-book">
            <div className="filter-container">
                <Filter />
            </div>

            <div className="menu-list">
                <div className="menu-row"> 
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                </div>
                <div className="menu-row"> 
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                </div>
                <div className="menu-row"> 
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                </div>
                <div className="menu-row"> 
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                    <OnePizza />
                </div>

                
            </div>

        </div>
    );
}
 


export default MenuBook;

