
import React from 'react';
import "./css/homepage.css";

import Slider from './Slider';
import TopBar from '../utils/TopBar';
import AboutUs from './AboutUs';
import Popular from './Popular';
import PizzaBuilder from './PizzaBuilder';
import IngredientBoxs from './IngredientsBoxs'
// import Testimonials from './Testimonial';
// import MobileApp from './MobileApp';
// import BlogPost from './BlogPostS';
// import Contacts from './Contacts';
// import Footer from '../utils/Footer';


const HomePage = () => {
    return(
        <div className="homepage">
            <Slider />
            <TopBar />
            <AboutUs />
            <Popular />
            <PizzaBuilder />
            <IngredientBoxs />
            {/* <Testimonials />
            <MobileApp />
            <BlogPost />
            <Contacts />
            <Footer /> */}

        </div>

    );
}
 


export default HomePage;

