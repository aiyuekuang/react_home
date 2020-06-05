/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect, useState} from 'react';
import './index.scss'
import {history, Link} from 'react-router-pro'
import {bizhi} from '@server/index';
import {inject, observer} from 'mobx-react';


const index = (props) => {
    const {userStore} = props;
    // Declare a new state variable, which we'll call "count"
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    //当前语言

    useEffect(() => {
        // Update the document title using the browser API
        bizhi((data) => {
            setData(data.data)
        }, page)
        return () => {
            console.log('组件即将卸载----')
        }
    }, [page]);


    function toOne() {
        history.push('/page/p_1')
    }

    let list = data.map((data, i) => {
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
                我是mobx里数据流处理的count1:{userStore.count1}
            </div>
            <div>
                <button onClick={() => {
                    userStore.add()
                }}>加count
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => {
                    userStore.jian()

                }}>减count
                </button>
            </div>

            <a onClick={() => toOne()}>react-router-pro用history去第一个内页</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/page/p_2">react-router-pro用Link去第二个内页</Link>
            <div>
                下面这个是由接口请求到的数据
            </div>
            <div className="react_home_list">
                {list}
            </div>
            <div className="react_home_list_add">
                <button onClick={() => {
                    setPage(org => org + 1)
                }}>
                    下一页
                </button>
            </div>
        </div>
    );
}

export default inject('userStore')(observer(index));
