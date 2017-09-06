/**
 * Created by Douglas on 8/29/2017.
 */
import React, {Component} from 'react';
import {graphql} from 'react-apollo'
import jwt from 'jsrsasign'

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
            <div>

                <h1>Profile</h1>
                {
                    User.venue ?
                        <div>
                            <div>{venue.name}</div>
                            <div>{User.email}</div>
                            <div>{venue.kind.join(' ')}</div>
                            <div>{venue.url}</div>
                            <div>{venue.phone}</div>
                            <div>{venue.address}</div>
                            <div>{venue.city}</div>
                            <div>{venue.state}</div>
                            <div>{venue.zip}</div>
                            <div>{venue.ageLimit}</div>
                            <div>
                                <label htmlFor="alcohol">Does this venue serve alcohol?</label>
                                <input name="alcohol" type="checkbox" defaultChecked={venue.alcohol}/>
                            </div>
                            <button>edit</button>
                            <h4>Events:</h4>
                            <button onClick={e => window.location.replace('/event')}>Create Event</button>
                            <hr/>
                            {
                               User.venue && events.length > 0  ?
                                    <div>
                                        {
                                            events.map(event => (
                                                <div key={event.id}>
                                                    <div>{event.name}</div>
                                                    <div>{event.kind.join(' ')}</div>
                                                    <div>{event.date}</div>
                                                    <button>edit</button>
                                                    <hr/>
                                                </div>
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