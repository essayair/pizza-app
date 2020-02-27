import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../homePage/HomePage';
import BuildPizza from '../buildPizza/BuildPizza';
import PizzaMenu from '../pizzaMenu/PizzaMenu';
import SideNav from '../UI/SideNav';
import OnePizza from "../pizzaMenu/components/OnePizza";
import TopBar from "../UI/TopBar";
import ShoppingCart from '../shoppingCart/ShoppingCart';

const Routes =() => {
    return (
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path="/homepage" component={ HomePage } />
                <Route exact path="/buildpizza" component={ BuildPizza } />
                <Route exact path="/pizzamenu" component={ PizzaMenu } />
                <Route exact path="/sidenav" component={ SideNav } />
                <Route exact path="/onepizza" component={ OnePizza } />
                <Route exact path="/topbar" component={ TopBar } />
                <Route exact path="/cart" component={ ShoppingCart } />




            </Switch>       
    );
}

export default Routes