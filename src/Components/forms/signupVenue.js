/**
 * Created by Douglas on 8/24/2017.
 */
import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import {createVenue} from '../../config/Auth/index'
import {Kind_Of_Venue} from '../../config/GraphQL/enums'

export default class extends Component {

    state = {
        kind:[],
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zip: 0,
        address: '',
        city: '',
        state: '',
        country: 'US',
        name: '',
        ageLimit: 0,
        alcohol: true,
        url: '',
        phone: '',
        open:true,
    }

    handleKindChange = (event, index, kind) => {
        kind.length < 3 ? this.setState({kind}) : alert("Max of 2 kinds per Venue, this helps to optimize searches for users.")
    }

    kindsOfVenue(kinds){
        return Kind_Of_Venue.map(kind => (
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

        const {kind, email, password, zip, address, city, country, state, name, ageLimit, alcohol, url, phone} = this.state

        return (
            <form onSubmit={e => {
                e.preventDefault()
                createVenue(email, password, zip, kind, address, city, state, country, name, ageLimit, alcohol, url, phone)
                    .then(e => window.location.replace('/login'))
            }}>

                <h2>New Venue</h2>
                <hr/>

                <h4>Account Information:</h4>
                <fieldset>
                    <input name="email"
                           type="email"
                           placeholder="example@gmail.com"
                           onChange={e => this.setState({email: e.target.value})}
                    />
                    <input name="password"
                           type="password"
                           placeholder="********"
                           onChange={e => this.setState({password: e.target.value})}
                    />
                </fieldset>

                <h4>Venue Information:</h4>
                <fieldset>
                    <input name="name"
                           type="text"
                           placeholder="Name of venue"
                           value={name}
                           onChange={e => this.setState({name: e.target.value})}
                    />
                    <input name="address"
                           type="text"
                           placeholder="1234 example st"
                           value={address}
                           onChange={e => this.setState({address: e.target.value})}
                    />
                    <input name="city"
                           type="text"
                           placeholder="City"
                           value={city}
                           onChange={e => this.setState({city: e.target.value})}
                    />
                    <input name="state"
                           type="text"
                           placeholder="State"
                           value={state}
                           onChange={e => this.setState({state: e.target.value.toUpperCase()})}
                           maxLength={2}
                    />
                    <input name="zip"
                           type="number"
                           placeholder="12345"
                           value={zip}
                           onChange={e => this.setState({zip: parseInt(e.target.value,10)})}
                    />
                    <input name="phone"
                           type="tel"
                           placeholder="Phone Number, no dashes or spaces"
                           value={phone}
                           onChange={e => this.setState({phone: e.target.value})}
                           maxLength={11}
                    />
                    <input name="url"
                           type="url"
                           placeholder="http://example.com"
                           value={url}
                           onChange={e => this.setState({url: e.target.value})}
                    />
                </fieldset>

                <fieldset>
                    Kind of Venue:
                    <SelectField
                        multiple={true}
                        hintText="max 2"
                        value={kind}
                        onChange={this.handleKindChange}

                    >
                        {this.kindsOfVenue(kind)}
                    </SelectField>
                </fieldset>

                <fieldset>
                    <label htmlFor="ageLimit">Does this venue have an age limit?</label>
                    <input name="ageLimit"
                           type="number"
                           value={ageLimit}
                           onChange={e => this.setState({ageLimit: parseInt(e.target.value,10)})}
                    />

                    <label htmlFor="alcohol">Does this venue serve alcohol?</label>
                    <input name="alcohol"
                           type="checkbox"
                           defaultChecked={true}
                           value={alcohol}
                           onChange={e => this.setState({alcohol: e.target.checked})}
                    />
                </fieldset>

                <fieldset>
                    <button type="submit">Register</button>
                </fieldset>
            </form>
        )
    }
}