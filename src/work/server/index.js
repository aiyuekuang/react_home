import {get_data} from "@utils/common";
import md5 from "react-native-md5";
import {cuns} from 'esn'
import history from '@components/public/history';


export let list = (fun, page = 1, count = 20) => {
    return get_data("/", {page, count}, (data) => {
        fun(data)
    })
}

export class List {
    url = "/"
    list = (fun, page = 1, count = 20) => {
        return get_data(this.url, {page, count}, (data) => {
            fun(data)
        })
    }
}