import {getData,postData} from "../utils/fetchData"
import {hashHistory, browserHistory} from "react-router"
import {  message,notification     } from 'antd';
import NProgress from 'nprogress';
import {val_empty} from 'esn'


export function act_index_tit(data) {
    return {
        type: "INDEX_TIT",
        data: data
    };
}
export function act_list(data) {
    return {
        type: "LIST",
        data: data
    };
}


//整合的一个get请求
export const get = (url = "", parm = {}, chenggong = function () {
},erro=()=>{}) => async (dispatch, getState) => {
    try {
        NProgress.start();
        let response = await postData(url, parm);
        //await console.log(response.data)
        await function (response) {
            if (val_empty(response.data)) {
                chenggong(response,dispatch, getState);
            } else {
                erro()
                notification['error']({
                    message: '警告',
                    description: response.data.errorMsg,
                });

            }
            NProgress.done();
        }(response)
    } catch (error) {
        console.log('error: ', error)
    }
}