/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import {handleAuthentication} from './config/Auth/index';

import NotFound from './Pages/notFound'
import Search from './Pages/searchResult'

export default () => (
    <Router>
        <Switch>

            <Route path="/" component={Search} />

            <Route exact path="/callback" component={(props) => {
                console.log(props);
                handleAuthentication(props);
                window.location = '/';
                return null
            }} />

            <Route component={NotFound}/>

        </Switch>
    </Router>
)