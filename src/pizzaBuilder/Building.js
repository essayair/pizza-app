/*here is building page */

import React from 'react';
import BuildIngredients from './BuildIngredients';
import BuildingInfoBoard from './BuildingInfoBoard';

const Building = () => {
    return (
        <div className="pizza-building">

            <div className="ingredients board">
                <h2>Building Your Own Pizza</h2>
                <BuildIngredients />
            </div>

            <div className="infoBoard board">
                <h2>Your Order </h2>
                <BuildingInfoBoard />
            </div>

        </div>

    )
}


export default Building;