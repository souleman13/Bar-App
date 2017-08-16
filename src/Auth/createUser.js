/**
 * Created by Douglas on 8/15/2017.
 */
import {gql} from 'react-apollo'
import {client} from '../config/apolloConfig'

export default async(idToken) => {
    await client.mutate({
        mutate: gql`
  mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}) {
      id
    }}`
    })
}

