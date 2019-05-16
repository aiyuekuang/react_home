import React, {Fragment, Component, PureComponent} from 'react';
import Index from '../page/zhuye';
import history from '@components/public/history';
import {qus} from 'esn';

let get_token = () => qus('token');

export let url_data = [{
    name: '首页',
    url: null,
    comp: Index,
    auth: false,
    children: [
        {
            name: '首页',
            url: '/neiye_1',
            comp: null,
            auth: false,
            children: null
        }, {
            name: '首页',
            url: '/neiye_2',
            comp: null,
            auth: false,
            children: null
        }
    ]
}
];
