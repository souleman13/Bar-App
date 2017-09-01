import * as Storage from './storage'
import {Client} from '../GraphQL/apolloConfig'
import {
    bindUserVenue,
    bindEventVenue,
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
        .catch(err => console.log(err))
}

export const login = (email, password) => {
    Client.mutate({
        mutation: signinUserMutation,
        variables: {
            email,
            password
        }
    })
        .then((response) => {
            Storage.save('token', response.data.signinUser.token)
            window.location.replace('/')
        })
        .catch(err => console.log(err))
}

export const createVenue = async (email, password, firstName, lastName, zip, address, city, state, country, name, ageLimit, alcohol, url, phone) => {
    debugger
    let venueID = ''
    let userID = ''
    debugger
    await createUser(email, password, firstName, lastName, zip)
        .then((response) => {
            userID = response.data.createUser.id
        })
        .catch(err => console.log(err))
    debugger
    await Client.mutate({
        mutation: createVenueMutation,
        variables: {
            zip,
            address,
            city,
            state,
            country,
            name,
            ageLimit,
            alcohol,
            url,
            phone
        }
    })
        .then((response) => {
            venueID = response.data.createVenue.id
        })
        .catch(err => console.log(err))
    debugger
    await Client.mutate({
        mutation: bindUserVenue,
        variables: {
            userID,
            venueID
        }
    })
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
        .then(async (response) => {
            const eventID = response.data.createEvent.id
            await Client.mutate({
                mutation: bindEventVenue,
                variables: {
                    venueID,
                    eventID
                }
            })
            window.location.replace('/profile')
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