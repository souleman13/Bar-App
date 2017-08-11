/**
 * Created by Douglas on 7/27/2017.
 */
import React, {Component} from 'react';
// import {gql, graphql} from 'react-apollo';

import {Hits, Pagination, SearchBox} from 'react-instantsearch/dom'

import Venue from '../Components/venue'

export default class extends Component {


    render() {


        return (
            <div>

                <SearchBox/>

                <Hits hitComponent={Venue} />

                <Pagination />

            </div>
        );
    }
}