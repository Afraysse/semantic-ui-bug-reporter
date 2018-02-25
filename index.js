require('babel-polyfill')

import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App.js';

ReactDOM.render(<App />, document.getElementById('app'))
