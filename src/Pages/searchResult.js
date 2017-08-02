/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import qs from 'qs'


class searchResult extends Component {

    render() {

        const {loading, allVenues} = this.props.data;

        const urlSplit = window.location.href.split('?');
        const queryString = urlSplit[1];
        console.log(queryString);

        return (
            <div>

                <h3>search results</h3>
                <hr/>



                {/*Test on mock data*/}
                {!loading && allVenues.map(venue => (
                    <div key={venue.id}>
                        <h3>{venue.name}</h3>
                        <p> Age Limit: {venue.ageLimit}</p>
                        <p>Hours: {venue.hours}</p>
                        <p>Events</p>
                        {venue.events.map(event => (
                            <div key={event.id}>
                                {event.name}
                            </div>
                        ))}
                        <hr/>
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