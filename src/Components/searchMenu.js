/**
 * Created by Douglas on 7/28/2017.
 */
import React, {Component} from 'react';

import {
    SearchBox,
    Toggle,
    RefinementList
} from 'react-instantsearch/dom'

export default class extends Component {

    render(){

        return(

            <div style={{padding:10}}>

                <h1>Search Menu</h1>

                <SearchBox/>

                Type of Venue:
                <RefinementList attributeName="kind" />

                Kinds of Events:
                <RefinementList attributeName="events.kind" />

                <Toggle
                    attributeName="alcohol"
                    label="No Alcohol"
                    value={'False'}
                />

            </div>
        );
    }
}