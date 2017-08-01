/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';

class login extends Component {

    render(){

        return(
            <div>

                <h3>login</h3>

            </div>
        );
    }
}
export default graphql(gql`
  
  {
  allUsers{
    name
  }
}
`)(login);