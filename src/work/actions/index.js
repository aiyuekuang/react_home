import {getData,postData} from "../utils/fetchData"
import {  message,notification} from 'antd';
import NProgress from 'nprogress';
import {val_empty,str_val} from 'esn'
import history from '../components/public/history';
import {api} from "@config"

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
