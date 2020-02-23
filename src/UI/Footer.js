import React from 'react';

import separateLogo from '../../src/assets/imgs/separate-logo.png';
import newsletterBase from '../../src/assets/imgs/newsletter-base.png'
// import separateSymbol from '../../src/assets/imgs/separate-symbol.png';
import './css/footer.css';
import NewsLetter from './NewsLetter';

const Footer = () => {

    return (
            
        <div className="footer">
            <NewsLetter />

            <div className="contact-us">
                <p>+34 9 368 7050</p>
                <p>order@pizza.com</p>
            </div>
            <div>
                <img src={separateLogo}  alt="separateLogo"/>
            </div>
            <div className="socialMedia">
                <ul>
                    <li><a href="www.aus2tech.com">Facebook</a></li>
                    <li><a href="www.aus2tech.com">Twitter</a></li>
                    <li><a href="www.aus2tech.com">Twitter</a></li>
                    <li><a href="www.aus2tech.com">Twitter</a></li>
                    <li><a href="www.aus2tech.com">Twitter</a></li>

                </ul>
            </div>
            <div className="copyright">
                <p>copyright @ 2020 Jiaqiang Li. All rights resered.</p>
            </div>
        </div>

    )
}




export default Footer;