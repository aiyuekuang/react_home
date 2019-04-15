/**
 * Created by zengtao on 2018/12/13.
 */
import Mock from 'mockjs';
let mock_api = "/mock"
export let mock_p = (url, entity = null, parm_in = {}, value = "成功", key = 1)=> {
    Mock.mock(mock_api + url, (parm)=> {
        for (let i of Object.keys(parm_in)) {
            if (!(i in JSON.parse(parm.body))) {
                return {
                    key: -1,
                    value: "参错错误"
                }
                break;
            }
        }
        return {
            key,
            value,
            entity
        }
    })
}

export let mock = (url, entity = null,value="成功", key = 1)=> {
    Mock.mock(mock_api + url, {
        key,
        entity,
        value
    })
}