import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TouchTapPlugin from 'react-tap-event-plugin'

import { InstantSearch } from 'react-instantsearch/dom'

import { Client } from './config/apolloConfig'
import { ApolloProvider } from 'react-apollo';

import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Wrapped = (
    <ApolloProvider client={Client}>
        <InstantSearch
        appId="8E11F0HYIO"
        apiKey="587a194fba4c0e2ce48c15b5ab040912"
        indexName="Venues"
        >
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <App/>
            </MuiThemeProvider>
        </InstantSearch>
    </ApolloProvider>
);

TouchTapPlugin();

ReactDOM.render(Wrapped, document.getElementById('root'));

registerServiceWorker();
