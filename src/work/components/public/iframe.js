/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, Component, PureComponent,createRef} from 'react';
import {Button, Input, Spin} from 'antd';
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import history from '@components/public/history';
import {cuns} from 'esn'
import {get_data} from "@components/public/common"

//本项目的模板页面

export default class Index extends Component {

    static defaultProps = {
        url: ""
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
        this.up_tree=createRef();
    }

    state = {
        wait: true,
        height: "auto"
    }


    componentDidMount = () => {

    }


    //移除
    componentWillUnmount() {
        //离开页面消除所有接口请求
        //window.requestCancel();
    }

    down = () => {
        let height = this.up_tree.current.contentWindow.document.body.scrollHeight;
        this.setState({
            wait: false,
            height
        })
    }

    render() {
        const {url} = this.props;
        const {height,wait} = this.state;
        return (
            <div className="content_body">
                <Spin tip="加载中，请稍后..." spinning={wait} wrapperClassName="yn_edu_wangpan_wait">
                    <iframe id="ifr" ref={this.up_tree} src={url} frameBorder="0" width="100%" onLoad={this.down} height={height}></iframe>
                </Spin>
            </div>
        )
    }
}

