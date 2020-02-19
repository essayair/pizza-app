
import React from 'react';

import Slider from './Slider';
import TopBar from '../utils/TopBar';
import AboutUs from './AboutUs';
import Popular from './Popular';
import PizzaBuilder from './PizzaBuilder';
// import Testimonials from './Testimonial';
// import MobileApp from './MobileApp';
// import BlogPost from './BlogPostS';
// import Contacts from './Contacts';
// import Footer from '../utils/Footer';


const HomePage = () => {
    return(
        <div>
            <Slider />
            <TopBar />
            <AboutUs />
            <Popular />
            <PizzaBuilder />
            {/* <Testimonials />
            <MobileApp />
            <BlogPost />
            <Contacts />
            <Footer /> */}

        </div>

    );
}
 


export default HomePage;

