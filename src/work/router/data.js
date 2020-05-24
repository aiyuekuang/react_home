import React, {Fragment, Component, PureComponent} from 'react';
import Index from "@page/home"
import One from "@page/pageOne"
import Two from "@page/pageTwo"
import {createMap} from 'esn';

export const urlCompEnum = createMap([{
    alias: "home",
    component: Index
},{
    alias: "page_1",
    component: One
}], "alias")


export let baseRoutes = [{
    name: "主页",
    path: "/",
    component: Index,
}, {
    name: "内页",
    icon: "page",
    path: "/page",
    children: [
        {
            name: "内页-1",
            icon: "user",
            path: "/p_1",
            component: One,
        },
        {
            name: "内页-2",
            icon: "user",
            path: "/p_2",
            component:Two,
        }
    ]
}
];
