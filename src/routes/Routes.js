import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../homePage/HomePage';
import PizzaBuilder from '../pizzaBuilder/PizzaBuilder';
import PizzaMenu from '../pizzaMenu/PizzaMenu';
import SideNav from '../UI/SideNav';
import OnePizza from "../pizzaMenu/OnePizza";

const Routes =() => {
    return (
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path="/homepage" component={ HomePage } />
                <Route exact path="/pizzabuilder" component={ PizzaBuilder } />
                <Route exact path="/pizzamenu" component={ PizzaMenu } />
                <Route exact path="/sidenav" component={ SideNav } />
                <Route exact path="/onepizza" component={ OnePizza } />


            </Switch>       
    );
}

export default Routes