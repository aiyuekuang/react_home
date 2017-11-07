/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Table,Modal,Button} from 'antd';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as index_act from "../../actions/index";
import {mapstate} from "../../reducers/shuju"


class Tui extends React.PureComponent {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {
        this.props.get('/list',{r:'0.7153214477881407'},(data)=>{
            this.props.act_list(data.data.msg.newlist)
        })
    }

    render() {
        let list = this.props.red_list.map((data,index)=>(
            <div key={index}>
                <div className="list_img"><a href={data.url} target="_blank"><img src={data.appthumb} alt=""/></a></div>
                <div className="list_tit">{data.title}</div>
                <div>{data.pubdate}</div>
                <div>浏览量：{data.play}</div>
            </div>))
        return (
            <div>
                <div className="neiye">
                    <h1>我是内页，我也来个列表</h1>
                </div>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Tui);