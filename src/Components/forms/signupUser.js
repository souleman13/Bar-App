/**
 * Created by Douglas on 8/24/2017.
 */
import React, {Component} from 'react'
import {createUser} from '../../config/Auth/index'



export default class extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zip: 0,
    }

    render(){

        const {email, password, firstName, lastName, zip} = this.state

        return (
        <form onSubmit={async e => {
            e.preventDefault()
            await createUser(email, password, firstName, lastName, zip)
        }}>
            <h3>New User</h3>

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
                <input name="zip"
                       type="number"
                       placeholder="12345"
                       value={zip}
                       onChange={e => this.setState({zip: parseInt(e.target.value,10)})}
                />
            </fieldset>

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
            <fieldset>
                <button type="submit">Register</button>
            </fieldset>
        </form>
        )
    }
}