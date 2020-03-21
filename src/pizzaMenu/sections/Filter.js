import React from 'react';

import '../css/pizzaMenu.scss';


const Filter = () => {
    return (
        <div className="filter_container">
            <div className="filter_title">
                <button className="filter_button"> FILTER</button>
                <p className="title-info">Showing 1-12 of 19 results</p>
            </div>
            <hr />
            <div className="filters">
                <div className="filter_list ">
                    <h5>SIZE</h5>
                    <label className="option-container"><input type="radio" value="Small" />Small</label>
                    <label className="option-container" ><input type="radio" />Medium</label>
                    <label className="option-container"><input type="radio" />Large</label>
                    <label className="option-container"><input type="radio" />Jumbo</label>
                    <label className="option-container"><input type="radio" />Party</label>
                </div>
                <div className="filter_list ">
                    <h5>SAUCES</h5>
                    <label className="option-container"> <input type="checkbox" />Marinara</label>
                    <label className="option-container"> <input type="checkbox" />Lcubg </label>
                    <label className="option-container"><input type="checkbox" />Barbeque</label>
                    <label className="option-container"><input type="checkbox" />Cheese</label>
                    <label className="option-container"><input type="checkbox" />Ranch</label>
                    <label className="option-container"><input type="checkbox" />Olive oli </label>
                    <label className="option-container"><input type="checkbox" />Garlic </label>
                </div>
                <div className="filter_list ">
                    <h5>CHEESES</h5>
                    <label className="option-container"><input type="checkbox" />Mozzarella </label>
                    <label className="option-container"><input type="checkbox" />Goat cheese </label>
                    <label className="option-container"><input type="checkbox" />Mascarpone</label>
                    <label className="option-container"><input type="checkbox" />Gorgozala </label>
                    <label className="option-container"><input type="checkbox" />Feta cheese</label>
                    <label className="option-container"><input type="checkbox" />Cheddar</label>
                    <label className="option-container"><input type="checkbox" />Parmigiano</label>
                </div>
                <div className="filter_list ">
                    <h5>MEATS</h5>
                    <label className="option-container"><input type="checkbox" />Pepperoni </label>
                    <label className="option-container"><input type="checkbox" />Grilled chicken</label>
                    <label className="option-container"><input type="checkbox" />Harm</label>
                    <label className="option-container"><input type="checkbox" />Beef</label>
                    <label className="option-container"><input type="checkbox" />Italian sausage</label>
                    <label className="option-container"><input type="checkbox" />Bacon</label>
                    <label className="option-container"><input type="checkbox" />Meatballs</label>
                </div>
                <div className="filter_list ">
                    <h5>VEGGIES</h5>
                    <label className="option-container"><input type="checkbox" />Onions</label>
                    <label className="option-container"><input type="checkbox" />Mushrooms </label>
                    <label className="option-container"><input type="checkbox" />Black olives</label>
                    <label className="option-container"><input type="checkbox" />Tomatoes</label>
                    <label className="option-container"><input type="checkbox" />Pineapple</label>
                    <label className="option-container"><input type="checkbox" />Peppers </label>
                    <label className="option-container"><input type="checkbox" />Aubergines </label>
                    <label className="option-container"><input type="checkbox" />Hot chillies </label>
                    <label className="option-container"><input type="checkbox" />Spinach</label>
                    <label className="option-container"><input type="checkbox" />Broccoli</label>
                </div>
            </div>
            <button className="confirm_button">FILTER SELECTED</button>
        </div>
    )
}


export default Filter;