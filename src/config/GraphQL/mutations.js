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
    mutation ($address:String, $city:String, $state:String, $country:String!, $name:String!, $ageLimit:Int, $alcohol:Boolean, $url:String, $phone:String!) {
        createVenue(address:$address, city:$city, state:$state, country:$country, name:$name, ageLimit:$ageLimit, alcohol:$alcohol, url:$url, phone:$phone){
            id
        }}`