/**
 * Created by Douglas on 7/27/2017.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import history from './history';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

import NotFound from './Pages/notFound'
import Search from './Pages/searchResult'

const auth = new Auth();

const handleAuthentication = (nextState,replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

export default () => (
    <Router  history={history} >
        <Switch>
            <Route path="/" render={(props) => <Search auth={auth} {...props} />} />

            <Route path="/callback" render={(props) => {
                debugger;
                handleAuthentication(props);
                return <Callback {...props} />
            }}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)