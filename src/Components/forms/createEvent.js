/**
 * Created by Douglas on 8/30/2017.
 */
import React, {Component} from 'react'
import jwt from 'jsrsasign'

import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import {Kind_Of_Event} from '../../config/GraphQL/enums'
import {itemByKey} from '../../config/Auth/storage'
import {createEvent} from '../../config/Auth/index'
import {getIDs} from '../../config/GraphQL/query'
import {graphql} from 'react-apollo'

let id = ''
if (itemByKey('token')) {
    const decoded = jwt.jws.JWS.parse(itemByKey('token'))
    id = decoded.payloadObj.userId
}

class CreateEvent extends Component {

    state = {
        name: 'Name of Event',
        ageLimit: 0,
        date: "",
        description: 'Description',
        kind: [],
        recurring: false,
        fromTime:null,
        toTime:null,
    }

    handleKindChange = (event, index, kind) => {
        kind.length < 3 ? this.setState({kind}) : alert("Max of 2 kinds per Venue, this helps to optimize searches for users.")
    }

    kindsOfEvents(kinds) {
        return Kind_Of_Event.map(kind => (
            <MenuItem
                key={kind}
                insetChildren={true}
                checked={kinds && kinds.indexOf(kind) > -1}
                value={kind}
                primaryText={kind}
            />
        ))
    }

    render() {

        const {date, fromTime, toTime, name, ageLimit, description, kind, recurring} = this.state

        const {User, loading} = this.props.data

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div>

                <h1>Create Event</h1>

                <form onSubmit={e => {
                    e.preventDefault()
                    const venueId = User.venue.id
                    createEvent(date, fromTime, toTime, venueId, name, kind, description, ageLimit, recurring)
                        .then(e=>window.location.replace('/profile'))
                        .catch(err => console.log(err))
                }}>
                    <fieldset>
                        <input name="name"
                               type="text"
                               placeholder="Name of Event"
                               onChange={e => this.setState({name: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <textarea name="description"
                                  placeholder="Description: Max 280 characters, thats 2 tweets!"
                                  maxLength={280}
                                  onChange={e => this.setState({description: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <input name="date"
                               type="date"
                               onChange={e => this.setState({date: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="from">From:</label>
                        <input name="from"
                               type="time"
                               onChange={e => this.setState({fromTime: e.target.value})}
                        />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="to">To:</label>
                        <input name="to"
                               type="time"
                               onChange={e => this.setState({toTime: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="ageLimit">Age Limit:</label>
                        <input name="ageLimit"
                               type="number"
                               value={ageLimit}
                               onChange={e => this.setState({ageLimit: parseInt(e.target.value,10)})}
                               max={21}
                        />
                    </fieldset>
                    <fieldset>
                        Kind of Event:
                        <SelectField
                            multiple={true}
                            hintText="Max 2"
                            value={kind}
                            onChange={this.handleKindChange}
                        >
                            {this.kindsOfEvents(kind)}
                        </SelectField>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="recurring">Is this event recurring?</label>
                        <input name="recurring"
                               type="checkbox"
                               defaultChecked={recurring}
                               value={recurring}
                               onChange={e => this.setState({recurring: e.target.checked})}
                        />
                    </fieldset>
                    <fieldset>
                        <button type="submit">Register</button>
                    </fieldset>
                </form>
            </div>
        );}}

export default graphql(getIDs, {options: {variables: {id: id}}})(CreateEvent)