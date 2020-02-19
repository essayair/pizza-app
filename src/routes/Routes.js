import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../homePage/HomePage';
import PizzaBuilder from '../pizzaBuilder/PizzaBuilder';
import Shop from '../shopping/Shop';


const Routes =() => {
    return (
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path="/homepage" component={ HomePage } />
                <Route exact path="/pizzabuilder" component={ PizzaBuilder } />
                <Route exact path="/shop" component={ Shop } />
            </Switch>       
    );
}

export default Routes