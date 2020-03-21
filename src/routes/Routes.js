import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import SideNav from '../components/SideNav';
import SideCart from '../components/SideCart';
import TopBar from "../components/TopBar";
import Login from "../components/Login";
import HomePage from '../homePage/HomePage';
import BuildPizza from '../buildPizza/BuildPizza';
import PizzaMenu from '../pizzaMenu/PizzaMenu';
import ShoppingCart from '../shoppingCart/ShoppingCart';


import {
    HOMEPAGE_URL,
    SHOPPINGCART_URL,
    BUILDPIZZA_URL,
    SIDENAV_URL,
    SIDECART_URL,
    TOPBAR_URL,
    LOGIN_URL,
    PIZZAMENU_URL,


} from './URLMaps'




const Routes =() => {
    return (
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path={HOMEPAGE_URL} component={ HomePage } />
                <Route exact path={BUILDPIZZA_URL} component={ BuildPizza } />
                <Route exact path={PIZZAMENU_URL} component={ PizzaMenu } />
                <Route exact path={TOPBAR_URL} component={ TopBar } />
                <Route exact path={SHOPPINGCART_URL} component={ ShoppingCart } />
                <Route exact path={SIDENAV_URL} component={ SideNav } />
                <Route exact path={SIDECART_URL} component={ SideCart } />
                <Route exact path={LOGIN_URL} component={ Login } />

            </Switch>       
    );
}

export default Routes