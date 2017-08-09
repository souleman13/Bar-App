/**
 * Created by Douglas on 8/3/2017.
 */
import React from 'react';

export default ({hit}) => (
    <div>
        <span><strong>{hit.name}</strong> - {hit.kind.join(' ')}<br/></span>
        {hit.hours}<br/>
        <div>{hit.address}</div>
        <div>{hit.city} {hit.state} {hit.zip}</div>
        <hr/>
    </div>
)