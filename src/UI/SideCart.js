import React from 'react';


import './css/sideCart.scss'
import PseudoImg from '../assets/icons/pseudo.png'
import cart_icon from "../assets/icons/icon-cart.png";



const SideCart = () =>{
    return (
        <div className="sidecart">
            <div className="side_cart_container">
                <div className="cart_icon">
                        <img src={cart_icon} alt="sidecart-icon" /> 
                </div>
                <div className="cart_totals">
                <h3>Cart Totals</h3>
                <div>
                    <div className="cart_order">
                        <input type="checkbox" value="delete" />
                        <div className="pizza_img">
                            <img src={PseudoImg} alt="pizza_img"/>
                        </div>
                        <div className="order_info">
                            <h6 className="pizza_name">Moorish Lamb</h6>
                            <p>Size:Large</p>
                            <p className="pizza_price">1 x $19</p>
                        </div>
                    </div>

                    <div className="cart_order">
                        <input type="checkbox" value="delete" />
                        <div className="pizza_img">
                            <img src={PseudoImg} alt="pizza_img"/>
                        </div>
                        <div className="order_info">
                            <h6 className="pizza_name">Moorish Lamb</h6>
                            <p>Size:Large</p>
                            <p className="pizza_price">1 x $19</p>
                        </div>
                    </div>
                </div>
 
                <div className="total_info">
                    <div className="order_total"><span>Order Total</span> <span>$79.00</span></div>
                </div>

                <button className="update_bt">VIEW SHOPPING CART</button>
                <button className="gocheck_bt">CHECKOUT</button>
            </div>


        </div>
        </div>
        
    )
}

export default SideCart;