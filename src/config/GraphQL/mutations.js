/**
 * Created by Douglas on 8/25/2017.
 */
import {gql} from 'react-apollo'

export const createUserMutation = gql`
    mutation($email: String!, $password: String!, $firstName: String, $lastName: String, $zip: String) {
        createUser(authProvider: { email: {email:$email, password:$password}}, firstName:$firstName, lastName:$lastName, zip:$zip) {
            id
        }}`

export const signinUserMutation = gql`
    mutation ($email: String!,$password: String!) {
        signinUser(email:{email: $email, password:$password}){
            token
            user {
                id
            }}}`

export const createVenueMutation = gql`
    mutation ($kind:[Kind_Of_Venue!] ,$zip:Int, $address:String, $city:String, $state:String, $country:String!, $name:String!, $ageLimit:Int, $alcohol:Boolean, $url:String, $phone:String!) {
        createVenue(kind:$kind, zip:$zip, address:$address, city:$city, state:$state, country:$country, name:$name, ageLimit:$ageLimit, alcohol:$alcohol, url:$url, phone:$phone){
            id
        }}`

export const createEventMutation = gql`
    mutation ($name:String!, $kind:[Kind_Of_Event!], $description: String, $date: DateTime, $ageLimit: Int, $recurring: Boolean!){
        createEvent(name:$name, kind:$kind, description:$description, date:$date, ageLimit:$ageLimit, recurring:$recurring){
            id
        }}`

export const bindUserVenue = gql`    
    mutation ($venue: ID!, $user: ID!) {
        setVenueOnUser(userUserId:$user, venueVenueId:$venue){
            userUser{ id }
            venueVenue{ id }
        }}`

export const bindEventVenue = gql`
    mutation ($venue: ID!, $event: ID!) {
        addToEventsOnVenue(venueVenueId: $venue, eventsEventId: $event) {
            venueVenue { id }
            eventsEvent { id }
        }}`