import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes'
import store from './store';
import './style/ztao.scss'
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root')
);
