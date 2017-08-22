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
            <div>

                <h1>LOGIN PAGE</h1>
                <form>
                    <fieldset>
                        <input name="email"
                               type="email"
                               placeholder="example@gmail.com"
                               onChange={e => this.setState({email: e.target.value()})}
                        />
                    </fieldset>
                    <fieldset>
                        <input name="password"
                               type="password"
                               placeholder="********"
                               onChange={e => this.setState({password: e.target.value()})}
                        />
                    </fieldset>
                    <fieldset>
                        <input type="submit" onClick={login(email,password)}/>
                    </fieldset>
                </form>

            </div>
        );
    }
}