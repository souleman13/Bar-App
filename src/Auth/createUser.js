/**
 * Created by Douglas on 8/15/2017.
 */
import {gql} from 'react-apollo'
import {client} from '../config/apolloConfig'

const createUserMutation = gql`
 mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}){
        id
        createdAt
        updatedAt
    }}`;

export default async (idToken) => {
    return await client.mutate({
        mutation: createUserMutation,
        variables:{
            idToken
        }
    })
}