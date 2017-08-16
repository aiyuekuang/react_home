/**
 * Created by zengtao on 2017/3/6.
 */
import {combineReducers} from "redux"
import {List,fromJS} from "immutable";

//超管首页的左侧菜单
export function red_index_tit (state = 1, action) {
    switch (action.type) {
        case "ZONG_INDEX_NAV_ACT":
            return parseInt(action.data);
            break;
        default:
            return state
    }
}


const rootReducer = combineReducers({
    red_index_tit

})
export default rootReducer