/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import { Button, Input, Modal,Form } from 'antd';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../../actions";
import { mapstate } from "../../../reducers/shuju"
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import history from '../history';
import {cuns} from 'esn'



const FormItem = Form.Item;

class RegistrationForm extends React.Component {
    state = {
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true, message: '请输入',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class Index extends React.Component {
    constructor(arg) {
        super(arg);

    }

    static defaultProps={

    }

    state={

    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillReceiveProps(nextProp){

    }
    //移除
    componentWillUnmount(){

    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(Index);
