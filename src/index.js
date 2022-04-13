import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes';
import "./work/style/ztao.scss"
import {isMock} from '../config';
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import userStore from '@mobx'
import test from '@mobx/tests';

const stores = {
    userStore, test
};
if(isMock){
    require("@mock")
}
configure({'enforceActions': 'always'});

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
