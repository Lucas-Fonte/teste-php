import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import New from '../pages/New';
import Edit from '../pages/Edit';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" exact component={New} />
            <Route path="/edit/:id" exact component={Edit} />
            <Route path="/details/:id" component={Details} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}
