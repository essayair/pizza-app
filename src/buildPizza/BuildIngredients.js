import React from 'react';

import fold from "../assets/icons/icon-symbol1.png";
import unfold from "../assets/icons/icon-symbol2.png";

const Ingredients = () => {
    return (

        <div className="ingredients board" >
                {/* <h2>Building Your Own Pizza</h2> */}

            <ul className="build_flow">
                <li className="steps">
                        <span className="first step">1.</span> <span className="step_name">ChooseYourCrust</span>
                        <img src={fold}  className="icons" alt="fold" />
                </li>

                <li className="steps">                    
                        <span className="second step">2.</span> <span className="step_name">SlectYourSauce</span>
                        <img src={fold} className="icons" alt="fold"/>
                </li>

                <li className="steps">
                        <span className="third step">3.</span> <span className="step_name">AddCheese</span>
                        <img src={unfold} className="icons" alt="unfold"/>
                </li>

                <li className="steps">
                        <span className="fourth step">4.</span><span className="step_name">ChooseYourTopping</span>
                        <img src={fold} className="icons" alt="fold"/>
                </li>       
                    
            </ul>
        </div>
    )

}


export default Ingredients;