import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../homePage/HomePage';


const Routes =() => {
    return (
        <BrowserRouter> 
            <Switch>
                <Redirect exact from="/" to="homePage" />
                <Route exact path="/homePage" component={ HomePage } />
            </Switch>       
        </BrowserRouter>


    );
}

export default Routes