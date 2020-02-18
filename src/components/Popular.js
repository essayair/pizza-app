import React from 'react';

import pizza_img from "../assets/imgs/pizza-img.png";

function Popular(){
    return (
        <div className="popular">
            
            <div className="popular-content">
                <div className="curren-pizza pizza-info">
                        <h2 className="pizza-name">Peri-Peri</h2>
                        <h3 className="price">$18 - $37</h3>
                        <p>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with </p>
                        <button>Order Now</button>     
                </div>

                <img src={ pizza_img } className="pizza-img" alt="pizza-img"/>  
            </div>


        </div>
    )
}




export default Popular;