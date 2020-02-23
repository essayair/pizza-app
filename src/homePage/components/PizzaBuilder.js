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

            <div className="build-flow">
                <div className="title">
                    <hr />
                    <div className="steps">
                        <div className="first step">1
                        <h3>ChooseYourCrust</h3>
                        </div>
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

            <button>CREATE YOUR OWN PIZZA</button>

        </div>
    )
}




export default PizzaBuilder;