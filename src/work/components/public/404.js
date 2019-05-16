/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, Component} from 'react';
import si from '@images/404.jpg';
import tf from '@images/tfans.jpg';
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import {url_add} from '@config';
//本项目的模板页面


export default class Index extends Component {
    static defaultProps={

    }

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

        this.state = {

        };
    }

    //移除
    componentWillUnmount(){
        //离开页面消除所有接口请求
        //window.requestCancel();
    }

    render() {
        const {} =this.props;
        const {} =this.state;
        return (
            <div className="not_found">
                <div id="errorpage">
                    <div className="tfans_error">
                        <div className="logo">
                            <img src={tf} alt=""/>
                        </div>
                        <div className="errortans clearfix">
                            <div className="e404">
                                <img src={si} alt=""/>
                            </div>
                            <p><b>出错啦！</b></p>
                            <p>您无权限访问此页面或访问的页面不存在</p>
                            <div className="bt"><Link to={url_add}>返回首页</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
