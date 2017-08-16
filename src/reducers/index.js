/**
 * Created by zengtao on 2017/3/6.
 */
import {combineReducers} from "redux"
import {List,fromJS} from "immutable";

//首页得文字
export function red_index_tit (state = '上面一旦重新填我就变了', action) {
    switch (action.type) {
        case "INDEX_TIT":
            return action.data;
            break;
        default:
            return state
    }
}
const rootReducer = combineReducers({
    red_index_tit
})
export default rootReducer