import ReactDOM from 'react-dom';
import React from 'react';
import App from './routes';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {ConfigProvider} from 'antd';
import "./work/style/ztao.scss"
import {configure} from 'mobx';
import {Provider} from 'mobx-react';
import userStore from '@mobx';
import test from '@mobx/tests';
import {is_mock} from '@config';
const stores = {
    userStore, test
};

if(is_mock){
    require("@mock")

}

configure({'enforceActions': 'always'});

ReactDOM.render(
    <ConfigProvider csp={{ nonce: zhCN }}>
        <Provider {...stores}>
            <App/>
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);
