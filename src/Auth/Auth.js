import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'souleman13.auth0.com',
        clientID: 'ocYCo4iED7d02rEC0TVPtUHNc5KXic0M',
        redirectUri: 'http://localhost:3000',
        audience: 'https://souleman13.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}