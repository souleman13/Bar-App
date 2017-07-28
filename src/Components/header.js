/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon'

import SearchMenu from './searchMenu';

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
                    <MenuItem href='/'>Profile</MenuItem>
                    <MenuItem href='/'>Popular Searches</MenuItem>
                    <MenuItem href='/'>Popular Near You</MenuItem>
                    <MenuItem href='/'>Fav Bars</MenuItem>
                    <MenuItem href='/'>Fav Searches</MenuItem>
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

