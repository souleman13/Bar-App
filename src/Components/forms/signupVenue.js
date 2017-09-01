/**
 * Created by Douglas on 8/24/2017.
 */
import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import {createVenue, login} from '../../config/Auth/index'
import {Kind_Of_Venue} from '../../config/GraphQL/enums'

export default class extends Component {

    state = {
        kind:[],
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zip: '',
        address: '',
        city: '',
        state: '',
        country: 'US',
        name: '',
        ageLimit: 0,
        alcohol: true,
        url: '',
        phone: ''
    }

    handleKindChange = (event, index, kind) => this.setState({kind})

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

        const {kind, email, password, firstName, lastName, zip, address, city, country, state, name, ageLimit, alcohol, url, phone} = this.state


        return (
            <form onSubmit={async e => {
                e.preventDefault()
                debugger
                await createVenue(email, password, firstName, lastName, zip, kind, zip, address, city, state, country, name, ageLimit, alcohol, url, phone)
                debugger
                await login(email, password)
                debugger
            }}>

                <h2>New Venue</h2>
                <hr/>

                <h4>Account Information:</h4>
                <fieldset>
                    <input name="email"
                           type="email"
                           placeholder="example@gmail.com"
                           value={email}
                           onChange={e => this.setState({email: e.target.value})}
                    />
                    <input name="password"
                           type="password"
                           placeholder="********"
                           value={password}
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
                           onChange={e => this.setState({zip: e.target.value})}
                    />
                    <input name="phone"
                           type="tel"
                           placeholder="123-456-7890"
                           value={phone}
                           onChange={e => this.setState({phone: e.target.value})}
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
                           onChange={e => this.setState({ageLimit: e.target.value})}
                    />

                    <label htmlFor="alcohol">Does this venue serve alcohol?</label>
                    <input name="alcohol"
                           type="checkbox"
                           defaultChecked={true}
                           value={alcohol}
                           onChange={e => this.setState({alcohol: e.target.value})}
                    />
                </fieldset>

                <fieldset>
                    <button type="submit">Register</button>
                </fieldset>
            </form>
        )
    }
}