/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon'

import SearchMenu from './searchMenu';
import Auth from '../Auth/Auth'


export default class extends Component {

    constructor(props) {
        super(props);
        this.auth = new Auth();

    }

    state ={
        open: false,
        openSearch: false,
    };

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

 render(){

     const { isAuthenticated } = this.auth;

     return(
            <div>

                <AppBar
                    title="Bar App"
                    iconElementRight={<FontIcon className="fa fa-search" aria-hidden="true"/>}
                    onLeftIconButtonTouchTap={e => this.setState({open: !this.state.open})}
                    onRightIconButtonTouchTap={e => this.setState({openSearch: !this.state.openSearch})}
                />
                {/*nav menu*/}
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    {/*drawer content*/}
                    <MenuItem href='/'>Home</MenuItem>
                    <MenuItem href='/user'>Profile</MenuItem>
                    {
                        isAuthenticated() ? (
                            <MenuItem onClick={this.login.bind(this)}>Log In</MenuItem>
                        ) : (
                            <MenuItem onClick={this.logout.bind(this)}>Log Out</MenuItem>
                        )
                    }


                </Drawer>

                {/*search menu*/}
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={300}
                    open={this.state.openSearch}
                    onRequestChange={(openSearch) => this.setState({openSearch})}
                >
                    {/*drawer content*/}
                    <SearchMenu />
                </Drawer>
            </div>
        );
    }
}

