/**
 * Created by Douglas on 8/3/2017.
 */
import React from 'react';

export default ({hit}) => (
    <div>
        <h3>{hit.name}<br/></h3>
        {hit.hours}<br/>
        {hit.kind}<br/>
        
        <hr/>
    </div>
)