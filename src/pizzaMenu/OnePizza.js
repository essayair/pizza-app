import React from 'react';
import pizzaSample from '../../src/assets/imgs/pizza-sample.png';
import './css/onePizza.scss';




const OnePizza = () => {
    return (
            <div className="OnePizza">
                {/* <onlick href to more info > */}
                <img src={ pizzaSample } alt="pizza"/>
                <h4 className="pizza-name" >Kimehi BBQ</h4>
                <p>Pizza is a savory dish of Italian origin. Pizza can be as simple or as difficult as you'd like it to be. </p>
                <h5 className="price"> $ 20.00 </h5>
                <div className="order-by-size">
                    <select className="size" name="size">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Jumbo">Jumbo</option>
                        <option value="Party Size">Party Size</option>
                    </select>
                        <button type="submit" className="add" value="submit">ADD</button>
                </div>  
            </div>

    )

}


export default OnePizza;