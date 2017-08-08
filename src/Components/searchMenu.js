/**
 * Created by Douglas on 7/28/2017.
 */
import React, {Component} from 'react';

import {
    SearchBox,
    Toggle,
    SortBy,
} from 'react-instantsearch/dom'

export default class extends Component {



    render(){

        return(

            <div>

                <h1>Search Menu</h1>

                <SearchBox/>

                <SortBy
                    items={[
                        { value: 'Venues', label: 'Venues' },
                        { value: 'Events', label: 'Events' },
                    ]}

                    defaultRefinement="Venues"
                />

                <Toggle
                    attributeName="sports"
                    label="Sports on TV"
                    value={'True'}
                />

                <Toggle
                    attributeName="eSports"
                    label="eSports on TV"
                    value={'True'}
                />

                <Toggle
                    attributeName="alcohol"
                    label="Alcohol"
                    value={'True'}
                />

                <div>
                    <button><a href="/search">Results</a></button>
                </div>

            </div>
        );
    }
}