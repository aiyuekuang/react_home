/**
 * Created by zengtao on 2018/8/1.
 */
import React, {Fragment, Component, PureComponent} from 'react';
import NProgress from 'nprogress';
import {api} from '@config/common';
import {notification,message} from 'antd';
import {getData, postData} from '../../utils/fetchData';

export const dateFormat = 'YYYY-MM-DD';

//整合的一个get请求，
//url:请求的地址
//parm：参数对象
//chenggong：请求成功后的回调
//all_fun：请求无论成功失败都会调用的一个回调，用于如loading的显示与消除
//erro：错误的回调
export const get_data = async (url = '', parm = {}, chenggong = () => {
}, all_fun = () => {
}) => {
    try {
        NProgress.start();
        let response = await postData(api.name + url, parm);
        await function (response) {
            chenggong(response.data);
            NProgress.done();
        }(response);
    } catch (error) {
        NProgress.done();
        all_fun();
        notification['error']({
            message: '警告',
            description: error.message
        });
    }
};

export const get_data_get = async (url = '', parm = {}, chenggong = () => {
}, all_fun = () => {
}) => {
    try {
    NProgress.start();
    //console.log("请求：",url,parm)
    let response = await getData(api.name + url, parm, 'get');
    //await console.log(response.data)
    await function (response) {
        chenggong(response.data);
        NProgress.done();
    }(response);
    } catch (error) {
        NProgress.done();
        all_fun();
        notification['error']({
            message: '警告',
            description: error.message
        });
    }
};

//临时下载插件
export let downloads = (output, downloadFileName = '文件') => {
    if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
            let blobObject = new Blob([output]);
            window.navigator.msSaveBlob(blobObject, downloadFileName);
        } catch (e) {
            console.log(e);
        }
    } else {
        let file = 'data:text/plain;charset=utf-8,';
        let logFile = output;
        let encoded = encodeURIComponent(logFile);
        file += encoded;
        let a = document.createElement('a');
        a.href = logFile;
        a.target = '_blank';
        a.download = downloadFileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
};

export let uid = () => {
    const now = +(new Date());
    return `bee-${now}`;
};
