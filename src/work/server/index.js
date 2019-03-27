import {get_data} from "@components/public/common";
import md5 from "react-native-md5";
import {cuns} from 'esn'
import history from '@components/public/history';
import {url_add} from "@config"


export let list = (fun,r='0.7153214477881407') => {
    return get_data("/", {r}, (data) => {
        fun(data)
    })
}
