/**
 * Created by Douglas on 7/28/2017.
 */
import React, {Component} from 'react';

export default class extends Component {



    render(){



        return(
            <div>
                <h1>Search Menu</h1>
                <form action="/search" method="get">
                    <fieldset>
                        <input type="text" placeholder="ZIP, address or name" name="zip"/>
                    </fieldset>
                    <fieldset >
                        <select
                            name="kind"

                        >
                            <option>Bar</option>
                            <option>Restaurant</option>
                            <option>Club</option>
                            <option>Concert Hall</option>
                            <option>Other</option>
                            <option>All</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <select name="music">
                            <option>Any</option>
                            <option>Live Band</option>
                            <option>DJ</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        Open Now:<input name="openNow" type="checkbox" label="Open Now" defaultChecked={true}/>
                        Sports:<input name="sports" type="checkbox" label="Sports" defaultChecked={false}/>
                        eSports:<input name="eSports" type="checkbox" label="eSports" defaultChecked={false}/>
                        Not Bar:<input name="noAlochol" type="checkbox" label="No Alcohol" defaultChecked={false}/>
                    </fieldset>

                    <fieldset>
                        <select name="distance">
                            <option>1</option>
                            <option>3</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                    </fieldset>

                        <button type="submit" href="/search">Submit</button>

                </form>

            </div>
        );
    }
}