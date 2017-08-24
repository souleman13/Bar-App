/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NotFound from './Pages/notFound'
import Search from './Pages/searchResult'
import Login from './Pages/login'
import  Signup from './Pages/signup'

export default () => (
    <Router>
        <Switch>

            <Route exact path="/" component={Search}/>

            <Route exact path="/login" component={Login}/>

            <Route exact path="/signup" component={Signup}/>

            <Route component={NotFound}/>

        </Switch>
    </Router>
)