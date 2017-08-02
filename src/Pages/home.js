/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';

class home extends Component {

    render(){

        return(
            <div>
                <h3>Tonight</h3>

                <h3>Favorites</h3>

            </div>
        );
    }
}
export default graphql(gql`
  
  {
  allVenues{
    name
    id
    events{
      name
      id
    }
  }
}
  
`)(home);