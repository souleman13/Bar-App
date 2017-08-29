import * as Storage from './storage'
import {Client} from '../GraphQL/apolloConfig'
import {createUserMutation, signinUserMutation, createVenueMutation} from '../GraphQL/mutations'

export const createUser = (email, password, firstName, lastName, zip) => {
    Client.mutate({
        mutation: createUserMutation,
        variables: {email, password, firstName, lastName, zip}
    })
        .then(login(email, password))
        .catch(err => console.log(err))
}

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

// export const createVenue = (address, city, state, country, name, ageLimit, alcohol, url, phone) => {
//     Client.mutate({
//         mutation: createVenueMutation,
//         variables: {
//             address,
//             city,
//             state,
//             country,
//             name,
//             ageLimit,
//             alcohol,
//             url,
//             phone
//         }})
//         .then((response) => {
//             Storage.save('token', response.data.signinUser.token)
//             window.location.replace('/')
//         })
//         .catch(err => console.log(err))
// }

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