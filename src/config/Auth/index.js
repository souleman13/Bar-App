import * as Storage from './storage'
import {Client} from '../apolloConfig'
import {gql} from 'react-apollo'

const createUserMutation = gql`
    mutation($email: String!, $password: String!, $firstName: String, $lastName: String, $zip: String) {
        createUser(authProvider: { email: {email:$email, password:$password}}, firstName:$firstName, lastName:$lastName, zip:$zip) {
            id
        }}`

export const createUser = (email, password, firstName, lastName, zip) => {
    Client.mutate({
        mutation: createUserMutation,
        variables: {email, password, firstName, lastName, zip}
    })
        .then(login(email, password))
        .catch(err => console.log(err))
}

const signinUserMutation = gql`
    mutation ($email: String!,$password: String!) {
        signinUser(email:{email: $email, password:$password}){
            token
        }}`


export const login = (email, password) => {
    Client.mutate({
        mutation: signinUserMutation,
        variables: {
            email,
            password
        }})
        .then((response) => {
            Storage.save('token', response.data.signinUser.token)
            window.location.replace('/')
        })
        .catch(err => console.log(err))
}

export const logout = () => {
    Storage.reset()
        .then(() => {
            Client.resetStore()
            window.location.replace('/')
        })
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