/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';
import {inject, observer} from 'mobx-react';
//本项目的模板页面


let prop={}

function index(pro) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);


    let props={
        ...prop,...pro
    }

    const {userStore} = props;

    useEffect(() => {
        // Update the document title using the browser API

        return ()=>{
        }
    },[count]);


    return (
        <div>
            {userStore.count1}
            <br/>
            我是内页2
        </div>
    );
}
export default inject('userStore')(observer(index));
