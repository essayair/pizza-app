/*here is building page */

import React from 'react';
import BuildIngredients from './BuildIngredients';
import BuildingInfoBoard from './BuildingInfoBoard';

const Building = () => {
    return (
        <div className="pizza-building">

                <BuildIngredients />

                <BuildingInfoBoard />

        </div>

    )
}


export default Building;