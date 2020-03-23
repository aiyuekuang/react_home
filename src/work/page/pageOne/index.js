/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';
//本项目的模板页面


let prop={}

export default function Index(pro) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

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
            我是内页1
        </div>
    );
}
