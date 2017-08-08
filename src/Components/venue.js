/**
 * Created by Douglas on 8/3/2017.
 */
import React from 'react';

export default ({hit}) => (
    <div>
        <h3>{hit.name}<br/></h3>
        {hit.kind}<br/>
        {hit.hours}<br/>

        <hr/>
    </div>
)