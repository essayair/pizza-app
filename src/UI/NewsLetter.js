import React from 'react';

import newsletterBase from '../../src/assets/imgs/newsletter-base.png'
import './css/newsLetter.scss';

const NewsLetter = () => {

    return (
            
        <div className="newsletter">

            <div class="subcribe">
                <img className="newsbase-img" src={newsletterBase} alt="newsbase-img" />
                <div className="content">
                        <p class="slogan">Sign up for the newsletter and get exclusive deals.</p>
                        <div className="sub-container">
                            <input type="text" id="fname" placeholder="Your Email Here" className="fname space" />
                            <button class="subcribebutton space">SUBCRIBE</button>
                        </div>

                </div>          
            </div>


        </div>


    )
}




export default NewsLetter;