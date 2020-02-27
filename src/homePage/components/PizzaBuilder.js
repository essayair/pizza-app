import React from 'react';


import fold from "../../assets/icons/icon-symbol1.png";
import unfold from "../../assets/icons/icon-symbol2.png";

const PizzaBuilder = () => {
    return (
        <div className="pizza-builder">
            <h2>Build Your Own Pizza</h2>
            <p>Do you think you have what it takes to become a chef and create a pizza masterpiece? 
                Well with Margherita’s you can do just that with Pizza Chef. The interactive pizza builder lets you create
                your pizza your way and is perfect for those customers who want to try a new flavour combination, 
                try new ingredients and mix it up from the menu.
            </p>

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

            <button>CREATE YOUR OWN PIZZA</button>



        </div>
    )
}




export default PizzaBuilder;