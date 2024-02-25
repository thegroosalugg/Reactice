import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // import redux

import './index.css';
import App from './App';
import store from './store/index'; // import store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
            // wrap the app with the provider and set store as the value
