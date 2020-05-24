/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';
import {mg} from 'margaret';
//本项目的模板页面


let prop={}

export default function Index(pro) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const {count1} = mg()


    let props={
        ...prop,...pro
    }
    const {} = props;

    useEffect(() => {
        // Update the document title using the browser API

        return ()=>{
        }
    },[count]);



    return (
        <div>
            {count1}
            <br/>
            我是内页2
        </div>
    );
}
