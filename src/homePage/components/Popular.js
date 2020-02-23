import React from 'react';

import pizza_img from "../../assets/imgs/pizza-img.png";

const Popular = () => {
    return (
        <div className="popular">

            <div className="popular-pizzas">
                <div className="pizza-info popular-pizza">
                    <h2 className="pizza-name">Peri-Peri</h2>
                    <h3 className="price">$18 - $37</h3>
                    <p>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with </p>
                    <button>Order Now</button>   
                </div>

                <div className="pizza-img popular-pizza">
                    <img src={pizza_img} alt="creative" />
                </div>
            </div>
        </div>
    )
}




export default Popular;