import React from 'react';
import './css/menuHeader.scss';
import './css/menuHeader.css';



const MenuHeader = () => {
    return (
        <div className="menu-header">
            <h1>Pizza Menu</h1>
            <div className="location">
            {/* functionbuild later */}
                <button>HomePage > Pizza Menu</button>
            </div>
        </div>
    )

}


export default MenuHeader;