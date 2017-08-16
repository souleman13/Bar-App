import auth0 from 'auth0-js';
import history from '../history'

import createUser from './createUser'

class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'souleman13.auth0.com',
        clientID: 'ocYCo4iED7d02rEC0TVPtUHNc5KXic0M',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://souleman13.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                createUser()
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time

        try {
            let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return !(new Date().getTime() < expiresAt);
        } catch(ex) {
            console.log(ex);
            return false;
        }
    }

    login() {
        this.auth0.authorize();
    }
}

export default Auth;