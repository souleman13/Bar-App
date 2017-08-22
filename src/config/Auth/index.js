import * as Storage from './storage'
import {Client} from '../apolloConfig'
import {gql} from 'react-apollo'

const createUser = gql`
    mutation($email: String!, $password: String!) {
        createUser(authProvider: { email: {email: $email, password::$password}) {
            id
        }}`

const signinUser = gql`
    mutation ($email: String!, $password: String!) {
        signinUser(email:{email: $email, password:$password}){
            id
        }}`

export const login = (email, password) => {
    signinUser({variables: {email, password}})
        .then((response) => {
        Storage.save('token', response.data.signinUser.token)
        })
}

export const logout = () => {
    Storage.reset()
        .then(() => Client.resetStore())
        .catch(err => console.error('Logout failed', err))
}

export const isAuthenticated = () => {
    try {
        
    } catch (err) {
        console.error(err)
        return false
    }
}