/**
 * Created by Douglas on 8/29/2017.
 */
import {gql} from 'react-apollo'

export const getUser = gql`
    query ($id:ID){
        User(id:$id){
            firstName
            lastName
            email
            zip
            venue{
                id
                address
                city
                state
                zip
                name
                kind
                ageLimit
                alcohol
                url
                phone
                events{
                    id
                    name
                    kind
                    date
                }
            }}}`

export const getIDs = gql`
    query ($id:ID){
        User(id:$id){
            venue{
                id
                events{
                    id
                }
            }}}`