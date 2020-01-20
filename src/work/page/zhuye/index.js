/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Card, Pagination, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {cuns} from 'esn';
import {inject, observer} from 'mobx-react';
import {list} from '@server';
import {baseImgUrl} from "@config"
import {ip, localhost,} from '@config/common';

const {Meta} = Card;

@inject('userStore', 'test')
@observer
class Index extends React.Component {
    constructor(arg) {
        super(arg);
        this.state = {
            data: [],
            loading:false
        };
    }


    componentWillMount = () => {
        console.log(`${baseImgUrl}/y.jpg`)
    };

    componentDidMount() {
        this.get_list();
    }

    get_list = (page = 1) => {
        this.setState({
            loading:true
        })
        list((data) => {
            console.log(data);
            this.setState({
                data: data.data,
                loading:false
            });
        }, page);
    };

    change = (page, pageSize) => {
        this.get_list(page);
    };

    render() {
        const {userStore, test} = this.props;
        const {data,loading} = this.state;

        let li = data.map((value, i) => (
            <div
                key={i}
            >
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<a href={value.url} target="_blank"><img alt={value.type} src={`${baseImgUrl}/y.jpg`} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${baseImgUrl}/y.jpg`;
                    }}/></a>}
                >
                    <Meta title={value.userId} description={value.userId}/>
                </Card>
            </div>
        ));
        return (
            <div className="zhuye">
                <Spin  tip="Loading..." spinning={loading}>
                    <div className="zhuye_li">
                        {li}
                    </div>
                </Spin>
                <div className="zhuye_page">
                    <Pagination total={1000} onChange={this.change}/>
                </div>
            </div>
        );
    }
}


export default Index;
