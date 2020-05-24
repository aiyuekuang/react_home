import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes';
import "./work/style/ztao.scss"
import {is_mock} from '../config';
import {MgProvider} from 'margaret';
import * as reducer from "./work/reducer";

if(is_mock){
    require("@mock")

}


ReactDOM.render(
        <MgProvider reducer={reducer}>
            <App/>
        </MgProvider>,
    document.getElementById('root')
);
