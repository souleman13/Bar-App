import * as Storage from './storage'
import {Client} from '../apolloConfig'
import {gql} from 'react-apollo'

const createUserMutation = gql`
    mutation($email: String!, $password: String!) {
        createUser(authProvider: { email: {email: $email, password:$password}) {
            id
        }}`

const signinUserMutation = gql`
    mutation ($email: String!, $password: String!) {
        signinUser(email:{email: $email, password:$password}){
            id
        }}`

export const creatUser = (email, password) => {
    createUserMutation({variables:{email, password}})
        .then((response) => {
            Storage.save('token', response.data.createUser.token)})
        .catch(err => console.log(err))
}

export const login = (email, password) => {
    signinUserMutation({variables: {email, password}})
        .then((response) => {
        Storage.save('token', response.data.signinUser.token)})
        .catch(err => console.log(err))
}

export const logout = () => {
    Storage.reset()
        .then(() => Client.resetStore())
        .catch(err => console.error('Logout failed', err))
}

export const isAuthenticated = () => {
    try {
        if (!Storage.itemByKey('token')) return false
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}