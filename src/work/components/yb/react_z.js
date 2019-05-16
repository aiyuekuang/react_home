/**
 * Created by zengtao on 2017/5/19.
 */
import React,{Fragment,Component} from 'react';

//本项目的模板页面


export default class Index extends Component {
    static defaultProps={

    }

    static getDerivedStateFromProps(nextProps,prevState) {
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
            <React.Fragment>

            </React.Fragment>
        )
    }
}