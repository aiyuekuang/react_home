import {getData,postData} from "../utils/fetchData"
import {hashHistory, browserHistory} from "react-router"
import {  message,notification     } from 'antd';
import NProgress from 'nprogress';


export function act_index_tit(data) {
    return {
        type: "SHOUYE_TIT",
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
            if (response.data.code == 0) {
                chenggong(response,dispatch, getState);
            } else if (response.data.code == 170001) {
                shans("yonghu")
                message.error(response.data.errorMsg);
                browserHistory.push({
                    pathname: "/"
                })
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