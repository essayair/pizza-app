import React from 'react';
import pizzaSample from '../../assets/imgs/pizza-sample.png';


class PizzaCard extends React.Component {


    
    render() {
        return (

            <div  className="pizza-card">
                 {/* <onlick href to more info > */}
                <ul>
                    <li className="pizza-img">
                        <img src={ this.props.pizzaImage } alt="pizza"/>
                    </li>
                    <li className="pizza-name">
                        <h4 >{this.props.pizzaName}</h4>
                    </li>
                    <li className="description">
                        <p>{this.props.description}</p>
                    </li>
                    <li>
                        <h5 className="price"> {this.props.price }</h5>
                    </li>
                    <li className="order-by-size">
                        <select className="size" name="size">
                            <option value="Small">{this.props.size}</option>
                            <option value="Medium" selected>Medium</option>
                            <option value="Large">Large</option>
                            <option value="Jumbo">Jumbo</option>
                            <option value="Party Size">Party Size</option>
                        </select>
                        <button type="submit" className="add" value="submit">ADD</button>
                    </li>  
                </ul>
            </div>
    )
    }

}


export default PizzaCard;