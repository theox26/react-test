import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-pro-solid';
import regular from '@fortawesome/fontawesome-pro-regular';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(solid, regular);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
