import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import App from './components/app/App';

import './index.css'
import './fonts/arkhip-font.css'
import './fonts/Cinzel-font.css'
import './fonts/Gilroy-font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

