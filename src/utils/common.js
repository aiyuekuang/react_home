/**
 * Created by zengtao on 2018/8/1.
 */
import React, {Fragment, Component, PureComponent} from 'react';
import NProgress from 'nprogress';
import {api, api_callback} from "@config"
import {is_mock} from "@config/user"
import {Button, Input, Alert, notification, Form, Icon, Table, message, Select} from 'antd';
import {getData, postData} from "./fetchData"
import {qus} from "esn"
import history from '@components/public/history';

export const dateFormat = 'YYYY-MM-DD';
const Option = Select.Option;

//整合的一个get请求，
//url:请求的地址
//parm：参数对象
//chenggong：请求成功后的回调
//all_fun：请求无论成功失败都会调用的一个回调，用于如loading的显示与消除
//erro：错误的回调
export const get_data = async (url = "", parm = {}, chenggong = () => {
}, all_fun = () => {
}, erro = () => {
}) => {
    try {
        let api_temp = api;
        if (is_mock) {
            api_temp = "/mock"
        }
        NProgress.start();
        let response = await postData(api_temp + url, parm);
        await function (response) {
            api_callback(response.data, (data) => {
                chenggong(data);
            }, (msg) => {
                erro();
                notification["error"]({
                    message: '提示',
                    description: msg,
                });
            })

            NProgress.done();
        }(response)
        await all_fun();
    } catch (error) {
        NProgress.done();
        all_fun();
    }
}

//临时下载插件
export let downloads = (output, downloadFileName = "文件") => {
    if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
            let blobObject = new Blob([output])
            window.navigator.msSaveBlob(blobObject, downloadFileName)
        } catch (e) {
            console.log(e)
        }
    } else {
        let file = 'data:text/plain;charset=utf-8,'
        let logFile = output
        let encoded = encodeURIComponent(logFile)
        file += encoded
        let a = document.createElement('a')
        a.href = logFile
        a.target = '_blank'
        a.download = downloadFileName
        document.body.appendChild(a)
        a.click()
        a.remove()
    }
}

//获取一个唯一的uuid
export let uid = () => {
    const now = +(new Date());
    return `bee-${now}`;
}
