import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes'
import store from './store';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd';
import "nprogress/nprogress.css";
import "anup/dist/anup.css";
import "./work/style/ztao.scss";


ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <App/>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);