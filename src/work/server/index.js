import {get_data, get_data_get} from '@common';

export let list = (fun, page=1) => get_data('/list', {
    page
}, (data) => {
    fun(data);
});

