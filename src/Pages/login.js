/**
 * Created by Douglas on 8/22/2017.
 */
import React, {Component} from 'react';
import {login} from '../config/Auth/'


export default class extends Component {

    state = {
        email: '',
        password: ''
    }

    render(){

        const {email, password} = this.state

        return(
            <div className="center">

                <h1>LOGIN</h1>
                <form onSubmit={e => {
                    e.preventDefault()
                    login(email,password)}}
                >
                    <fieldset>
                        <input name="email"
                               type="email"
                               placeholder="example@gmail.com"
                               value={email}
                               onChange={e => this.setState({email: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <input name="password"
                               type="password"
                               placeholder="********"
                               value={password}
                               onChange={e => this.setState({password: e.target.value})}
                        />
                    </fieldset>
                    <fieldset>
                        <button type="submit">login</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}