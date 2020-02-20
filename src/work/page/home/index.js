/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Card, Pagination, Spin,Radio} from 'antd';
import {Link} from 'react-router-dom';
import {cuns} from 'esn';
import {inject, observer} from 'mobx-react';
import {list} from '@server';
import {baseImgUrl} from "@config"
import {Example} from '@components/hook';
import intl from 'react-intl-universal';
import {toJS} from 'mobx';
import {localesList} from '@mobx/locales';
const {Meta} = Card;

@inject('userStore', 'test',"locales")
@observer
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading:false
        };
        intl.init({
            currentLocale: toJS(this.props.locales.language).locales,  // 设置初始语音
            locales:localesList
        }).then(() => {

        });
        this.get_list();

    }

    changeLocale=(e)=>{
        this.props.locales.changeLanguage(e.target.value)
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
                <Example/>

                <Radio.Group onChange={this.changeLocale}>
                    <Radio.Button key="en" value={"en_US"}>
                        English
                    </Radio.Button>
                    <Radio.Button key="cn" value={"zh_CN"}>
                        中文
                    </Radio.Button>
                </Radio.Group>
                <p>国际化测试: {intl.get('key1')}</p>
                <Spin  tip="Loading..." spinning={loading}>
                    <div className="zhuye_li">
                        {li}
                    </div>
                </Spin>
                <div className="zhuye_page">
                    <Pagination total={1000} onChange={this.change} showSizeChanger/>
                </div>
            </div>
        );
    }
}


export default Index;
