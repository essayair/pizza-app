
import React from 'react';

import OnePizza from "./OnePizza";
import Filter from './Filter';

const MenuBook = () => {
    return(
        <div className="menu_book">
            <Filter />

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

