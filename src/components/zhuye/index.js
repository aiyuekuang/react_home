/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { Button, Input, Alert } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../actions/index";
import { mapstate } from "../../reducers/shuju"
import Head from '../public/head'
import {
    Link
} from 'react-router-dom';

class Index extends React.Component {
    constructor(arg) {
        super(arg);

    }

    componentWillMount = () => {
    }
    dianji = () => {
    }
    gaizi = (e) => {
        this.props.act_index_tit(e.target.value);
    }

    render() {
        return (
            <div className="zhuye">
                <Head {...this.props} />
                <div>
                    <Input type="text" onChange={this.gaizi.bind(this)} placeholder="填入试试下面得字会变" />
                </div>
                <div>
                    <Alert message={this.props.red_index_tit} type="success" />
                </div>
                <div>
                    <Link to="/tui">
                        跳转到内页
                    </Link >
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);