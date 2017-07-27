import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TouchTapPlugin from 'react-tap-event-plugin'

const Wrapped = (
    <App/>
);

TouchTapPlugin();

ReactDOM.render(Wrapped, document.getElementById('root'));

registerServiceWorker();
