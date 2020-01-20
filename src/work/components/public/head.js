/**
 * Created by zengtao on 2017/8/16.
 */
//简单得纯组件，就不要引入redux了，保持他得纯净,需要redux得数据得话，我们直接从他得父组件 <Head {...this.props}/>这样就可以了，多么得爽
import React from 'react';
import {Table,Modal,Button} from 'antd';


export default class Head extends React.Component {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {

    }

    render() {
        return (
            <div className="head">
                {this.props.red_head_tit}
            </div>
        )
    }
}
