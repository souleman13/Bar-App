/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import home from './Pages/home'
import login from './Pages/login'
import signup from './Pages/signup'
import NotFound from './Pages/notFound'
import search from './Pages/searchResult'
import params from './Pages/searchParams'

export default () => (
    <Router>
        <Switch>

            <Route path="/" exact component={home}/>
            <Route path="/login" exact component={login}/>
            <Route path="/signup" exact component={signup}/>
            <Route path="/searchParam" exact component={params} />
            <Route path="/search" exact component={search}/>

            <Route component={NotFound}/>

        </Switch>
    </Router>
)