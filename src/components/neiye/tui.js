/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Table,Modal,Button} from 'antd';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as index_act from "../../actions/index";
import {mapstate} from "../../reducers/shuju"


class Tui extends React.Component {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {
    }

    render() {
        return (
            <div>
                我是内页
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate,bindact)(Tui);