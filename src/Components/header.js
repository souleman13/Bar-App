/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SearchMenu from './searchMenu';

import { login, isAuthenticated, logout } from '../config/Auth/index'

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
                    iconElementRight={<i className="fa fa-search" aria-hidden="true"/>}
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
                        isAuthenticated() ?
                            <MenuItem onClick={e=> logout()}>Log Out</MenuItem> : <MenuItem href="/login">Log In</MenuItem>

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

