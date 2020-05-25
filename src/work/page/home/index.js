/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect, useState} from 'react';
import './index.scss'
import {history, Link, mg} from 'margaret'
import {bizhi} from "@server/index";


const index = (props) => {
    const {} = props;
    // Declare a new state variable, which we'll call "count"
    const [data, setData] = useState([]);
    const {count1,dispatch} = mg()
    //当前语言

    useEffect(() => {
        // Update the document title using the browser API
        bizhi((data)=>{
            setData(data.data)
        })
        return () => {
            console.log('组件即将卸载----')
        }
    }, []);


    function toOne() {
        history.push('/page/p_1')
    }

    let list = data.map((data,i)=>{
        return (
            <div key={i}>
            <div>
                谜语：{data.title}
            </div>
            <div>
                答案：{data.answer}
            </div>
        </div>)
    })
    return (
        <div className="react_home">
            <div>
                我是margaret里数据流处理的count1:{count1}
            </div>
            <div>
                <button onClick={()=>{
                    dispatch({
                        type:"ADD"
                    })
                }}>加-count1</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>{
                dispatch({
                    type:"JIAN"
                })
            }}>减-count1</button>
            </div>

            <a onClick={() => toOne()}>margaret用history去第一个内页</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/page/p_2">margaret用Link去第二个内页</Link>
            <div>
                下面这个是由接口请求到的数据
            </div>
            <div className="react_home_list">
                {list}
            </div>
        </div>
    );
}

export default index