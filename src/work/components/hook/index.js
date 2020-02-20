/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';
import { Button, Input, Modal } from 'antd';
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import history from '@components/public/history';

import {cuns} from 'esn';
//本项目的模板页面

export function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [value, onChange] = useState("请输入文字吧");

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log('组件加载')

        return ()=>{
            console.log('组件即将卸载----')
        }
    },[count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Input value={value} onChange={(e)=>onChange(e.target.value)}/>
        </div>
    );
}
