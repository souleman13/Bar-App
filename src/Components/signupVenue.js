/**
 * Created by Douglas on 8/24/2017.
 */
import React, {Component} from 'react'
import {createUser} from '../config/Auth/'

export default class extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zip: '',
        address:'',
        city:'',
        state:'',
        country:'US',
        name:'',
        ageLimit: 0,
        alcohol:true,
        url:'',
        phone:'',
    }

    render(){

        const {email, password, firstName, lastName, zip, address, city, country, state, name, ageLimit, alcohol, url, phone} = this.state

        return (
            <form onSubmit={e =>{e.preventDefault()
                createUser(email, password, firstName, lastName, zip)}}>

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

                <h4>Boss-Man Information (optional):</h4>
                <fieldset>
                    <input name="firstName"
                           type="text"
                           placeholder="Ray"
                           value={firstName}
                           onChange={e => this.setState({firstName: e.target.value})}
                    />
                    <input name="lastName"
                           type="text"
                           placeholder="Charles"
                           value={lastName}
                           onChange={e => this.setState({lastName: e.target.value})}
                    />
                </fieldset>

                <fieldset>
                    <button type="submit">Register</button>
                </fieldset>
            </form>
        )
    }
}