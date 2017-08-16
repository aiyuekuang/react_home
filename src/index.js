import { Provider } from 'react-redux';
import { Router,Route, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import React from 'react';
import router from './routes'
import store from './store';
import './style/ztao.scss'


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {router}
        </Router>
    </Provider>,
    document.getElementById('root')
);
