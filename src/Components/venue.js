/**
 * Created by Douglas on 8/3/2017.
 */
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card'


const style = {
    margin: 10,
};

export default ({hit}) => (
        <Card style={style}>
            <CardHeader
                title={hit.name}
                subtitle={hit.kind.join(' ')}
                showExpandableButton={true}
                actAsExpander={true}/>
            <CardText>
                <div>{hit.hours}</div>
                <div>{hit.address}</div>
                <div>{hit.city} {hit.state} {hit.zip}</div>
            </CardText>
            <CardText expandable={true}>
                {(hit.events.length > 0 ) ? hit.events.map(event => (
                    <div key={event.id}>
                        <div>{event.name}</div>
                        <div>{event.date}</div>
                        <div>{event.description}</div>
                        <br/>
                    </div>
                )) : <div>No Special Events</div>}
            </CardText>
        </Card>
)