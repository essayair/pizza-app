
import React from 'react';
import "./css/homepage.scss";

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


import Slider from './sections/Slider';
import AboutUs from './sections/AboutUs';
import Popular from './sections/Popular';
import PizzaBuilder from './sections/PizzaBuilder';
import IngredientBoxs from './sections/IngredientsBoxs'
// import Testimonials from './components/Testimonial';
import MobileApp from './sections/MobileApp';
import BlogPost from './sections/BlogPosts';
// import Contacts from './Contacts';


const HomePage = () => {
    return(
        <div className="homepage">
            <Slider />
            <TopBar />
            <AboutUs />
            <Popular />
            <PizzaBuilder />
            <IngredientBoxs />
            {/* <Testimonials /> */}
            <MobileApp />
            <BlogPost />
            {/* <Contacts /> */}
            <Footer />

        </div>

    );
}
 


export default HomePage;

