
import React from 'react';

import './css/shoppingCart.scss';

import TopBar from '../UI/TopBar';
import Footer from '../UI/Footer';
import PseudoImg from '../assets/icons/pseudo.png'

const ShoppingCart = () => {
    return (
        <div>
            <TopBar />

            <div className="shopping_cart">
                <div className="cart_header">
                    <h1>Pizza Cart</h1>
                    <div className="location">
                    {/* functionbuild later */}
                        <button>HomePage > Pizza Cart</button>
                    </div>
                </div>

                <div className="cart">
                    <div className="orders">
                        <div className="order_head">
                            <div class="column order_delete"></div>
                            <div class="column order_name">PRODUCT</div>
                            <div class="column order_price">PRICE</div>
                            <div class="column order_qty">QTY</div>
                            <div class="column order_total">TOTAL</div>
                        </div>
                        <div className="order_list">
                                <div className="column ordered">
                                    <input type="checkbox" />
                                </div>
                                <div className="column _pizza_info">
                                    <img class="_pizza_img" src={PseudoImg} alt="img"/>
                                    <div className="_pizza_name_size">
                                        <span className="_pizza_name">Moorish Lamb</span>
                                        <span className="_pizza_size">Size:large</span>
                                    </div>
                                </div>
                                <div className="column _price">
                                    <span>$19.00</span>
                                </div>
                                <div className="column _qty"> <input type="text" value="1" /> </div>
                                <div className="column _total_price">$19.00</div>

                        </div>

                        <div className="order_shiping_promo"> 
                            <div className="order_adress">
                                <h3>Calculate Shipping</h3>
                                <div className="adress">
                                    <select className="column country" name="country">
                                        <option value="country">United Kingdom(UK)</option>
                                        <option value="country" selected>Australia(AU)</option>
                                    </select>                                
                                    <input className="column" type="text" value="State / County" />
                                    <input className="column" type="text" value="Postcode / ZIP" />
                                </div>
                                <button type="submit" value="APPLY"> UPDATE TOTALS </button>

                            </div>
                            
                            <div className="order_promo_code">
                                <h3>Promotional Code</h3>
                                <div className="promo_code">
                                    <input type="text" value="Enter your promotional code" />

                                </div>
                                <button type="submit" value="APPLY" > APPLY </button>
                            </div>
                        </div>

                    </div>

                    <div className="cart_totals">
                        <h3>Cart Totals</h3>
                        <div className="total_info">
                            <div className="subtotal"><span>Cart Subtotal</span><span>$79.00</span></div>
                            <div className="ship_or"><span>SHIPPING AND HANDLING</span><span>Free Shipping</span></div>
                            <div className="order_total"><span>Order Total</span> <span>$79.00</span></div>
                        </div>

                        <button className="update_bt">UPDATE CART</button>
                        <button className="gocheck_bt">PROCEED TO CHECKOUT</button>
                    </div>
                </div>

            </div>

            < Footer />

        </div>
        
    );
}


export default ShoppingCart;