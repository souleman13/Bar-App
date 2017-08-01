/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';

class searchResult extends Component {

    render() {

        console.log(this.props.data);
        const {loading, allVenues} = this.props.data;

        return (
            <div>

                <h3>search results</h3>
                {!loading && allVenues.map(venue => (
                    <div key={venue.id}>
                        <h3>{venue.name}</h3>
                        {venue.ageLimit}
                        {venue.hours}
                        <p>Events</p>
                        {venue.events.map(event => (
                            <div key={event.id}>
                                {event.name}
                            </div>
                        ))}

                    </div>
                ))}

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