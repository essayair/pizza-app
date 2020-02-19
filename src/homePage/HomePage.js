
import React from 'react';

import Slider from './Slider';
import Header from './Header';
import AboutUs from './AboutUs';
import Popular from './Popular';
import PizzaBuilder from './PizzaBuilder';
// import Testimonials from './Testimonial';
// import MobileApp from './MobileApp';
// import BlogPost from './BlogPostS';
// import Contacts from './Contacts';
// import Footer from './Footer';


const HomePage = () => {
    return(
        <div>
            <Slider />
            <Header />
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

