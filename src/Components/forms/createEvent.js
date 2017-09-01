/**
 * Created by Douglas on 8/30/2017.
 */
import React, {Component} from 'react'

import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import {Kind_Of_Event} from '../../config/GraphQL/enums'
import {itemByKey} from '../../config/Auth/storage'
import {createEvent} from '../../config/Auth/index'
import {getIDs} from '../../config/GraphQL/query'
import {graphql} from 'react-apollo'
import jwt from 'jsrsasign'

let id = ''
if (itemByKey('token')) {
    const decoded = jwt.jws.JWS.parse(itemByKey('token'))
    id = decoded.payloadObj.userId
}

class CreateEvent extends Component {

    state = {
        name: 'name',
        ageLimit: 21,
        date: null,
        description: 'desc',
        kind: [],
        recurring: false

    }

    handleDateChange = (event, date) => {
        this.setState({date: date})
    }

    handleKindChange = (event, index, kind) => this.setState({kind})

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

        const {name, ageLimit, date, description, kind, recurring} = this.state

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
                    createEvent(venueId, name, kind, description, ageLimit, recurring)
                        .then(e=>window.location.replace('/profile'))
                        .catch(err => console.log(err))
                }}>
                    <fieldset>
                        <input name="name"
                               type="text"
                               placeholder="Name of Event"
                               value={name}
                               onChange={e => this.setState({name: e.target.value})}
                        />
                        <textarea name="description"
                                  placeholder="Description: Max 272 characters"
                                  value={description}
                                  onChange={e => this.setState({description: e.target.value})}
                        />
                        <label htmlFor="ageLimit">Age Limit:</label>
                        <input name="ageLimit"
                               type="number"
                               value={ageLimit}
                               onChange={e => this.setState({ageLimit: parseInt(e.target.value)})}
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

                    {/*<fieldset>*/}
                    {/*<DatePicker hintText="When is your event?" value={date} onChange={this.handleDateChange} />*/}
                    {/*</fieldset>*/}

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
        );
    }
}

export default graphql(getIDs, {options: {variables: {id: id}}})(CreateEvent)