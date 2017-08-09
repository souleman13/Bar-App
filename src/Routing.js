/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import login from './Pages/login'
import signup from './Pages/signup'
import NotFound from './Pages/notFound'
import search from './Pages/searchResult'
import user from './Pages/Profiles/userProfile'
import venue from './Pages/Profiles/venueProfile'


export default () => (
    <Router>
        <Switch>

            <Route path="/" exact component={search}/>
            <Route path="/login" exact component={login}/>
            <Route path="/signup" exact component={signup}/>
            <Route path="/user" exact component={user}/>
            <Route path="/venue" exact component={venue}/>


            <Route component={NotFound}/>

        </Switch>
    </Router>
)