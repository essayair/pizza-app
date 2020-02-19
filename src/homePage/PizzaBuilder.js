import React from 'react';


import fold from "../assets/icons/icon-symbol1.png";
import unfold from "../assets/icons/icon-symbol2.png";

const PizzaBuilder = () => {
    return (
        <div className="pizza-bulder ">
            <h2>Build Your Own Pizza</h2>
            <p>Do you think you have what it takes to become a chef and create a pizza masterpiece? 
                Well with Margherita’s you can do just that with Pizza Chef. The interactive pizza builder lets you create
                your pizza your way and is perfect for those customers who want to try a new flavour combination, 
                try new ingredients and mix it up from the menu.
            </p>

            <hr />
            <div className="build-flow title">
                <div className="first">1</div>
                <h3>ChooseYourCrust</h3>
                <div className="unfold">
                    <img src={fold} alt="fold" />
                </div>
            </div>
            <hr />
            <div className="build-flow title">
                <div className="second">2</div>
                <h3>SlectYourSauce</h3>
                <div className="unfold">
                    <img src={fold} alt="fold"/>
                </div>
            </div>

            <div className="build-flow title">
                <div className="third">3</div>
                <h3>AddCheese</h3>
                <div className="unfold">
                    <img src={unfold} alt="unfold"/>
                </div>
            </div>

            <div className="build-flow title">
                <div className="third">3</div>
                <h3>ChooseYourTopping</h3>
                <div className="unfold">
                    <img src={fold} className="icons" alt="fold"/>
                </div>
            </div>

            <button>CREATE YOUR OWN PizzaBuilder</button>

        </div>
    )
}




export default PizzaBuilder;