/**
 * Created by Douglas on 8/25/2017.
 */
import {gql} from 'react-apollo'

export const createUserMutation = gql`
    mutation($email: String!, $password: String!, $firstName: String, $lastName: String, $zip: Int) {
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
    mutation($venue:UservenueVenue,$email: String!, $password: String!, $zip: Int) {
        createUser(
            authProvider: { email: {email:$email, password:$password}},
            zip:$zip,
            venue:$venue
        ) {
            id
            venue{
                id
            }
        }
    }`

export const createEventMutation = gql`
    mutation ($date:DateTime, $fromTime:String, $toTime:String, $venueId:ID, $name:String!, $kind:[Kind_Of_Event!], $description: String,$ageLimit: Int, $recurring: Boolean!){
        createEvent(
            date:$date,
            fromTime:$fromTime,
            toTime:$toTime,
            venueId:$venueId,
            name:$name,
            kind:$kind,
            description:$description,
            ageLimit:$ageLimit,
            recurring:$recurring
        ){
            id
        }}`