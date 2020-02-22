/*here is building page */

import React from 'react';
import Ingredients from './Ingredients';
import InfoBoard from './InfoBoard';

const Building = () => {
    return (
        <div className="pizza-building">

            <div className="ingredients board">
                <h2>Building Your Own Pizza</h2>
                <Ingredients />
            </div>

            <div className="infoBoard board">
                <h2>Your Order </h2>
                <InfoBoard />
            </div>

        </div>

    )
}


export default Building;