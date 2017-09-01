import * as Storage from './storage'
import {Client} from '../GraphQL/apolloConfig'
import {
    createUserMutation,
    signinUserMutation,
    createVenueMutation,
    createEventMutation
} from '../GraphQL/mutations'


export const createUser = (email, password, firstName, lastName, zip) => {
    Client.mutate({
        mutation: createUserMutation,
        variables: {
            email,
            password,
            firstName,
            lastName,
            zip
        }
    })
        .then(e=>login(email, password))
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

export const createVenue = async (email, password, zip, kind, address, city, state, country, name, ageLimit, alcohol, url, phone) => {
    const result = await Client.mutate({
        mutation: createVenueMutation,
        variables: {
            email,
            password,
            zip,
            venue: {
                kind,
                zip,
                address,
                city,
                state,
                name,
                country,
                alcohol,
                ageLimit,
                url,
                phone
            }
        }})
    return result
}

export const createEvent = async (venueId, name, kind, description,ageLimit, recurring) => {
    const result = await Client.mutate({
        mutation: createEventMutation,
        variables: {
            venueId,
            name,
            kind,
            description,
            ageLimit,
            recurring
        }
    })
    return result
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