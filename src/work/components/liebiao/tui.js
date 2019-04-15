/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Table, Modal, Button, List, Card} from 'antd';
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as index_act from "@actions/index";
import {mapstate} from "../../reducers/shuju"
import {qus} from 'esn'
import {list} from "@server"
const { Meta } = Card;
import "./index.scss"

class Tui extends React.PureComponent {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = () => {
        list((data) => {
            this.props.act_list(data.result)
        })
    }

    render() {
        const {red_list} =this.props;
        let red_list_li = red_list.map((data,i)=>(
            <div key={i}>
                <Card
                    hoverable
                    cover={<div className="list_img"><a href={data.img} target="_blank"><img alt="example" src={data.img} /></a></div>}
                >
                    <Meta
                        title={data.time}
                        description="敬请欣赏"
                    />
                </Card>
            </div>
        ))

        return (
            <div>
                <div className="neiye">
                    <h1>我是内页，我也来个列表</h1>
                    <h3 className="hongzi">{qus('canshu')}</h3>
                </div>
                <div className="list">
                    {red_list_li}
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Tui);
