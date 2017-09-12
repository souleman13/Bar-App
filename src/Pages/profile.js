/**
 * Created by Douglas on 8/29/2017.
 */
import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import jwt from 'jsrsasign'
import Paper from 'material-ui/Paper'

import {itemByKey} from '../config/Auth/storage'
import {getUser} from '../config/GraphQL/query'


let id = ''
if (itemByKey('token')) {
    const decoded = jwt.jws.JWS.parse(itemByKey('token'))
    id = decoded.payloadObj.userId
}


class profile extends Component {

    state = {
        editMode: false
    }

    render() {

        const {User = {}, loading} = this.props.data

        if (loading) {
            return <p>Loading...</p>;
        }

        let venue = {}
        let events = []

        if(User.venue) {
            venue = User.venue
            events = venue.events
        }

        return (
            <div className="center">
                <h1>Profile</h1>
                {
                    User.venue ?
                        <div>
                            <div>Name: {venue.name}</div>
                            <div>Email: {User.email}</div>
                            <div>{venue.kind.join(', ')}</div>
                            <div>Website: {venue.url}</div>
                            <div>Phone: {venue.phone}</div>
                            <div>Address: {venue.address}</div>
                            <div>{venue.city}</div>
                            <div>{venue.state}</div>
                            <div>{venue.zip}</div>
                            <div>Age Limit: {venue.ageLimit}</div>
                            <div>
                                <label htmlFor="alcohol">Does this venue serve alcohol?</label>
                                <input name="alcohol" type="checkbox" defaultChecked={venue.alcohol} disabled={true}/>
                            </div>
                            <h4>Events:</h4>
                            <button onClick={e => window.location.replace('/event')}>Create Event</button>
                            <hr/>
                            {
                               User.venue && events.length > 0  ?
                                    <div>
                                        {
                                            events.map(event => (
                                                <Paper key={event.id} zDepth={3} style={{margin:5}}>
                                                    <div>{event.name}</div>
                                                    <div>{event.kind.join(' ')}</div>
                                                    <div>{event.date ? event.date.split('T',1):null}</div>
                                                    <div>From: {event.fromTime}</div>
                                                    <div>To: {event.toTime}</div>
                                                </Paper>
                                            ))
                                        }
                                    </div> : <div>You have no events!</div>
                            }

                        </div>
                        :
                        <div>
                            <div>{User.firstName}</div>
                            <div>{User.lastName}</div>
                            <div>{User.email}</div>
                            <div>{User.zip}</div>
                        </div>
                }
            </div>
        );

    }
}

export default graphql(getUser, {options: {variables: {id: id}}})(profile)