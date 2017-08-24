/**
 * Created by Douglas on 8/22/2017.
 */
import React, {Component} from 'react';
import SignUpUser from '../Components/signupUser'
import SignUpVenue   from '../Components/signupVenue'

export default class extends Component {

    state = {
        isVenue: false,
    }

    render() {


        return (
            <div>
                <h1>SIGN UP PAGE</h1>
                <div>
                    <p>User or Venue account?</p>
                    <span>
                        <button onClick={e => this.setState({isVenue: false})}>User</button>
                        <button onClick={e => this.setState({isVenue: true})}>Venue</button>
                    </span>
                </div>

                {this.state.isVenue ? <SignUpVenue/> : <SignUpUser/>}

            </div>
        );
    }
}