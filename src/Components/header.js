/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SearchMenu from './searchMenu';
import {white} from 'material-ui/styles/colors'

import { isAuthenticated, logout } from '../config/Auth/index'

export default class extends Component {

    state ={
        open: false,
        openSearch: false,
    };

 render(){

     return(
            <div>
                <AppBar
                    title="Bar App"
                    iconElementRight={<i className="fa fa-search fa-3x" aria-hidden="true" style={{color: white}}/>}
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
                    {
                        isAuthenticated() ?
                            <div>
                                <MenuItem href='/profile'>Profile</MenuItem>
                                <MenuItem onClick={e=> logout()}>Log Out</MenuItem>
                            </div>
                            : <div>
                            <MenuItem href="/login">Log In</MenuItem>
                            <MenuItem href="/signup">Sign Up</MenuItem>
                        </div>
                    }

                </Drawer>

                {/*search menu*/}
                <Drawer
                    docked={false}
                    openSecondary={true}
                    width={250}
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

