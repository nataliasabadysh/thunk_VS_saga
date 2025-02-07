// // Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter  as Router } from 'react-router-dom';

// Instruments
import { store } from './init/store';
// import { history } from './init/middleware/core';

import './theme/init';

// App
import App from './navigation/App';

render(
        <Provider store = { store }>
            <Router>
                <App />
            </Router>
        </Provider>,
    document.getElementById('app')
);
