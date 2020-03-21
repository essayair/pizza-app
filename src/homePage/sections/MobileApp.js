import React from "react";
import iphone from "../../assets/imgs/iPhone6.png";

function MobileApp() {

  return (
    <div className="content mobileApp">
      <div className="mobileApp-content">
        <div className="row">
          <div className="side">
            <div>
              <img className="iphone" src={iphone} alt="iphone" />
            </div>
          </div>
          <div className="mainMobile">
            <h1>Get the newest version of our mobile app for your phone.</h1>

            <p>
              Do you have an iPhone, Android device or an web-enabled mobile?
              Then it’s easier than ever to order hot and fresh pizza – no phone
              calls necessary! Mobile ordering lets you access all the best
              features in a format that’s tailored to the screen size of your
              mobile phone, find special online offers and order your favorite
              pizza and sides in a flash.
            </p>
            <h3>Here's why it's great:</h3>
            <ul>
              <li>It's free</li>
              <li>No registration required</li>
              <li>Order from the full menu</li>
              <li>Find local deals</li>
              <li>Pay directly from the app</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
