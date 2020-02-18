import React from 'react';

import careful from "../assets/icons/icon-feature1.png";
import certified from "../assets/icons/icon-feature2.png";
import creative from "../assets/icons/icon-feature3.png";


function AboutUs(){
    return (
        <div className="content about-us ">
            <div className="about-content">
                <h1>We are pizza makers, and our mission is to make <br /> 
                cool pizza which feeds all your senses </h1>
                <p className="description">We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud of that. 
                    It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family. 
                    And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</p>
            </div>

            <div className="features">
                <div className="careful feature">
                    <img src={careful} alt="careful"/>
                    <h1>We're Careful</h1>
                    <p className="description">The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a  designated kit, 
                        and every pizza is freshly baked on designated parchment paper in our ovens.</p>
                </div>

                <div className="certified feature">
                    <img src={certified} alt="certified"/>
                    <h1>We're Certified</h1>
                    <p className="description">Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), 
                        and we take specific caution when making these pizzas.</p>
                </div>

                <div className="creative feature">
                    <img src={creative} alt="creative" />
                    <h1>We're Creative</h1>
                    <p className="description">For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option.
                        The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</p>
                </div>
            </div>
        </div>
    )
}



export default AboutUs;