/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';

import {Hits} from 'react-instantsearch/dom'

import Venue from '../Components/venue'

class searchResult extends Component {


    render() {


        return (
            <div>

                <Hits hitComponent={Venue} />

            </div>
        );
    }
}
export default graphql(gql`

  {
  allVenues{
    id
    name
    ageLimit
    hours
    events{
      name
      id
    }
  }
}

`)(searchResult);