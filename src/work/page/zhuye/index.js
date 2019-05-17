/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Card, Pagination, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {cuns} from 'esn';
import tu from '@images/y.jpg';
import {pro} from '@config';
import {inject, observer} from 'mobx-react';
import {list} from '@server';

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
                    cover={<a href={value.url} target="_blank"><img alt={value.type} src={value.url} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558100080721&di=ee288567a95efe6b659a55808ac8956b&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100728%2F3525627_100908018992_2.jpg';
                    }}/></a>}
                >
                    <Meta title={value.type} description={value.type}/>
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
                    <Pagination defaultCurrent={1} total={1000} onChange={this.change}/>
                </div>
            </div>
        );
    }
}


export default Index;
