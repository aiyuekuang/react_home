import React from 'react';
import { Route, IndexRoute, Router, Redirect,IndexRedirect } from 'react-router';
import { AppContainer } from './appContainer';

import Index from './components/zhuye/index'
import Tui from './components/neiye/tui'



/*export let juese =qus("dl") !== null?["super_admin","researcher_admin","surveyor_admin","qc_admin","firm_admin","dealer_admin","final_check_admin"].indexOf(JSON.parse(qus("dl")).groupId):2;*/

let route = (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={Index}/>
        /*1是超级管理员角色*/
        <Route path={"tui"} component={Tui}></Route>
    </Route>
);


export default route;



