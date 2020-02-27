
import React from 'react';

import './css/shoppingCart.scss';
import TopBar from '../UI/TopBar';
import Footer from '../UI/Footer';

const ShoppingCart = () => {
    return (
        <div className="shopping_cart">
            <TopBar />
            <div className="cart_header">
                <h1>Pizza Cart</h1>
                <div className="location">
                {/* functionbuild later */}
                    <button>HomePage > Pizza Cart</button>
                </div>
            </div>

            <div className="cart">
                <div className="orders">
                

                </div>

                <div className="cart_totals">
                    <h3>Cart Totals</h3>
                    <div className="subtotal"><span>Cart Subtotal</span><span>$79.00</span></div>
                    <div className="ship_or"><span>SHIPPING AND HANDLING</span><span>Free Shipping</span></div>
                    <div className="order_total"><span>Order Total</span> <span>$79.00</span></div>
                    <button className="update_bt">UPDATE CART</button>
                    <button className="gocheck_bt">PROCEED TO CHECKOUT</button>
                </div>
            </div>

            < Footer />
        </div>
    );
}


export default ShoppingCart;