
import React from 'react';
import "./css/homepage.css";

import Slider from './components/Slider';
import TopBar from '../UI/TopBar';
import AboutUs from './components/AboutUs';
import Popular from './components/Popular';
import PizzaBuilder from './components/PizzaBuilder';
import IngredientBoxs from './components/IngredientsBoxs'
// import Testimonials from './components/Testimonial';
import MobileApp from './components/MobileApp';
import BlogPost from './components/BlogPosts';
// import Contacts from './Contacts';
import Footer from '../UI/Footer';


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

