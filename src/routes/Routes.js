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

const Routes =() => {
    return (
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path="/homepage" component={ HomePage } />
                <Route exact path="/buildpizza" component={ BuildPizza } />
                <Route exact path="/pizzamenu" component={ PizzaMenu } />
                <Route exact path="/topbar" component={ TopBar } />
                <Route exact path="/shoppingcart" component={ ShoppingCart } />
                <Route exact path="/sidenav" component={ SideNav } />
                <Route exact path="/sidecart" component={ SideCart } />
                <Route exact path="/login" component={ Login } />

            </Switch>       
    );
}

export default Routes