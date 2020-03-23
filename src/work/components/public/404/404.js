/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, Component} from 'react';
import {
    Link
} from 'react-router-dom';
import "./index.scss"
//本项目的模板页面


export default class Index extends Component {
    static defaultProps = {}

    static getDerivedStateFromProps(nextProps, prevState) {
        // const {value} = nextProps;
        // 当传入的type发生变化的时候，更新state
        // if ("value" in nextProps && value !== prevState.value) {
        //     console.log(value)
        //     return {
        //         value,
        //     };
        // }
        return null;
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    //移除
    componentWillUnmount() {
        //离开页面消除所有接口请求
        //window.requestCancel();
    }

    render() {
        const {} = this.props;
        const {} = this.state;
        return (
            <div className="not_found">
                <div>
                    <p><b>出错啦！</b></p>
                    <p>您无权限访问此页面或访问的页面不存在</p>
                    <div><Link to={"/"}>返回首页</Link></div>
                </div>
            </div>
        );
    }
}
