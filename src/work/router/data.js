import React, {Fragment, Component, PureComponent} from "react";
import Index from '@components/zhuye/index'
import Tui from '@components/liebiao/tui'
import Neiye1 from '@components/neiye/neiye1'
import Neiye2 from '@components/neiye/neiye2'
import history from '@components/public/history';
import {qus} from "esn"

let get_token = () => {
    return qus("token");
}

export let url_data =[{
    name: "列表",
    url: '/tui',
    comp: Tui,
    auth: 1,
    children: null
}, {
    name: "首页",
    url: null,
    comp: Index,
    auth: false,
    children: [
        {
            name: "首页",
            url: '/neiye_1',
            comp: Neiye1,
            auth: false,
            children: null
        }, {
            name: "首页",
            url: '/neiye_2',
            comp: Neiye2,
            auth: false,
            children: null
        }
    ]
}
]
