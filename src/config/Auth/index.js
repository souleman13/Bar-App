import * as Storage from './storage'
import {Client} from '../GraphQL/apolloConfig'
import {
    createUserMutation,
    signinUserMutation,
    createVenueMutation,
    createEventMutation
} from '../GraphQL/mutations'


export const createUser = async (email, password, firstName, lastName, zip) => {
    await Client.mutate({
        mutation: createUserMutation,
        variables: {
            email,
            password,
            firstName,
            lastName,
            zip
        }
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

export const createVenue = async (email, password, zip, kind, address, city, state, country, name, ageLimit, alcohol, url, phone) => {
    await Client.mutate({
        mutation: createVenueMutation,
        variables: {
            venue: {
                kind,
                zip,
                address,
                city,
                state,
                country,
                name,
                alcohol,
                ageLimit,
                url,
                phone
            },
            email,
            password,
            zip
        }})
        .then(login(email, password))
        .catch(err => console.log(err))
}

export const createEvent = async (venueID, name, kind, description, date, ageLimit, recurring) => {
    await Client.mutate({
        mutation: createEventMutation,
        variables: {
            name,
            kind,
            description,
            date,
            ageLimit,
            recurring
        }
    })
        .then(window.location.replace('/profile'))
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