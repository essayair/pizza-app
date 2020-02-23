import React from 'react';

import fold from "../assets/icons/icon-symbol1.png";
import unfold from "../assets/icons/icon-symbol2.png";

const Ingredients = () => {
    return (
<div className="build-flow">
                <div className="title">
                    <hr />
                    <div className="steps">
                        <div className="first step">1</div>
                        <h3>ChooseYourCrust</h3>
                        <img src={fold}  className="icons" alt="fold" />
                    </div>

                </div>

                <div className="title">                    
                    <hr />
                    <div className="steps"> 
                        <div className="second step">2</div>
                        <h3>SlectYourSauce</h3>
                        <img src={fold} className="icons" alt="fold"/>
                    </div>

                </div>

                  
                <div className="title">
                    <hr />  
                    <div className="steps">
                        <div className="third step">3</div>
                        <h3>AddCheese</h3>
                        <img src={unfold} className="icons" alt="unfold"/>
                    </div>

                </div>

                <div className="title">
                    <hr />
                    <div className="steps">
                        <div className="fourth step">4</div>
                        <h3>ChooseYourTopping</h3>
                        <img src={fold} className="icons" alt="fold"/>
                    </div>

                </div>       
                    <hr />     
            </div>
    )

}


export default Ingredients;