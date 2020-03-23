/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect, useState} from 'react';
import './index.scss'
import {inject, observer} from 'mobx-react';
import {history,Link} from "react-router-pro"


let index = (props) => {
    const {userStore} = props;
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    //当前语言

    useEffect(() => {
        // Update the document title using the browser API
        console.log('组件加载')

        return () => {
            console.log('组件即将卸载----')
        }
    }, [count]);


    function toOne() {
        history.push("/page/p_1")
    }

    return (
        <div className="react_home">
            <a onClick={()=>toOne()}>去第一个内页</a>
            <Link to="/page/p_2">去第二个内页</Link>
        </div>
    );
}

export default inject( 'userStore')(observer(index));